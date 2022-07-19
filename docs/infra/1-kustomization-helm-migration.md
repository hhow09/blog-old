# Kustomization to Helm 3 Migration

## Intro
Currently we are using [kustomize](https://kustomize.io/) to manage Kubernetes resources.

With a base YAML, there are different dimensions (e.g. `environment`s, `pool`s, `cluster`s ) of variants we need to apply. The **inheritence** style of architecrue result in nested overlay folder structure like follow. This impairs readability.

```
├── deploy
│ 	├── hpa.yaml
│ 	├── deployment.yaml
│ 	└── kustomization.yaml
├── overlay
│	├── env1
│	|     ├── deploy
│	|	  |		├── kustomization.yaml
│	| 	  |		└── patch.yaml
|   |	  └── overlay
│	|		 	├── pool1
|	|			|		├── deploy
|   |			|		└── overlay...
│	|		 	└── pool2
│	├── env2
│	├── env3
``` 

Secondly, for template that only different in values like `pool`, for simplicity, we do NOT maintaining every `pool` overlay, instead using placeholders trick (e.g. `__POOL__`) and replace it after `kustomize` rendered. This makes the logic complex.

## Migrate to Helm
After investigating [Helm](https://helm.sh/), another templating tool with different functionality and concept. The concept is more about `composition` compared to the **inheritence** style of [kustomize](https://kustomize.io/).

Helm and kustomize are not equivilant, Helm can do more than templating. Here I only use the templating funcions to replace kustomize.

With Helm we could template with variables and assign variables in different **values files**. Therefore can "flatten" the overlay structure using values files. In short it is using `values` and `template` logic/functions to replace `overlay` logic.

### Values
[Values](https://helm.sh/docs/chart_template_guide/values_files/) is one of the **built-in objects** of Helm. It comes from:
1. The `values.yaml` file in the chart 
2. The `values.yaml` file of a parent chart if this is a subchart
3. Dynamically passed arguments in CLI with `--set` (such as `helm install --set foo=bar ./mychart`)

### Steps
1. Create Helm `Chart`s with repect to each base YAML.
2. Copy the base YAML into `Chart` `templates`
3. Convert kustomize `overlays` into `Values` and `named template` logics.
  	1. value files naming convention `value-${env}-${pool}-${cluster}`, refering to original overlay logic but a flattened version.
  	2. migrate `env` overlays into `values-{env}.yaml`
  	3. migrate `pool` overlays into `values-{env}-{pool}.yaml`
4. Test the output, compare with existing ones.

### Named Templates
[Named Templates](https://helm.sh/docs/chart_template_guide/named_templates/)
Where does template `{{ include "some_template" . }}` come from ?
1. template file `_helpers.tpl`
2. defined in `template` files
```yaml
{{ define "MY.NAME" }}
  # body of template here
{{ end }}
```

## Notes
### 1. Can we specify multiple values in Helm command? 
Yes, with `helm template chartName -f my-first-value.yaml -f my-second-value.yaml...` and the priority would from right to left. Helm will merge value files for us. 

Therefore we can minimize the duplication of values files

### 2. How to compare two YAML files ?
During migration, we need to ensure the new method has exactly same output as original one.
With 2 YAMLs with **effectively** same contents, fields or array could be different in order. There is no simple way to compare if two YAMLs are **effectively** same. 

#### Solution 1
Noted that [YAML is a superset of JSON](http://yaml.org/spec/1.2-old/spec.html#id2759572). So "every JSON file is also a valid YAML file". 

We could compare two YAMLs with 1) convert YAML to JSON 2) sort some specific keys 3) perform [json diff](https://github.com/xlwings/jsondiff)

#### Solution 2
[dyff](https://github.com/homeport/dyff): A diff tool for YAML files, and sometimes JSON

### 3. Can we dynamically assign Values in Helm command?
Yes, [reference](https://helm.sh/docs/chart_template_guide/values_files/)
`helm template --set foo=bar ./mychart` 

### 4. Can we do templating `prefix-{{ .Values.foo }}` in Value files?
No, templating only works in `template` files (a.k.a `templates` folder inside Chart)


### 5. Use Values v.s. Template
Yaml files are key-value pairs.
1. if different situation only differ in value, simply use `Values`
2. if different situation also different in fields, we can 
	- if value is simple key-value pair (just like `new HashMap<String, String>`, or `List<Map>`), we could use golang [template functions](https://helm.sh/docs/chart_template_guide/control_structures/) like `range`
	```
	{{- range $key, $val := .Values.kvpairs }}
    	{{ $key }}: {{ $val }}
    {{- end }}
	```
	- if logic is more complex we could define [Named Templates](https://helm.sh/docs/chart_template_guide/named_templates/) in `_helpers.tpl` and `include` it for certain condition.
### 6. Can Helm escape `{{` and `}}`
Yes, in template.

- ref: [Can Helm support to ignore {{expr}} which is just for configuration but not render?](https://github.com/helm/helm/issues/2798)

### 7. Can we use some template outside current Chart ? 
Yes, see [Library Charts](https://helm.sh/docs/topics/library_charts/)