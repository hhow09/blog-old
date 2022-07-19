# Clean Code - Object Oriented Design

## 前言

公司新訓讀 Clean Code 紀錄。

## Inheritance 繼承

### 定義

繼承可以基於某個父類別對物件的定義加以擴充，而制訂出一個新的子類別定義。

- 子類別可以繼承父類別原來的某些定義
- 子類別可以增加原來的父類別所沒有的定義
- 子類別可以重新定義父類別中的某些特性

### 優點

- 子類可以輕鬆的擁有父類的方法來方便地實現對父類的擴展。

### 缺點

父子之間的耦合度高，如果修改父類則子類也需要作出相應的修改，或是為了不同種子類而增加系統複雜度。

### 使用繼承的時機:

- [Polymorphism](https://caterpillar.gitbooks.io/javase6tutorial/content/c8_2.html)
- 兩者關係是 X 是 A 的一種，並且 X 是延伸 A 而不需要去修改 A 的情況，此情況以外的建議用 Composition。

---

## Composition 複合

在我們對現實中的某些事物抽象成 Class 時，可能會形成很複雜的 Class，為了更簡潔的進行開發，我們經常把其中相對比較獨立的部分拿出來定義成一個個簡單的 Class，由這些簡單的 Class 再組成我們想要的類。Composition 最簡單的做法就是設計 Class 的時候把要組合的對象加入到自己之中作為自己的 local variable，也就是 has 的概念。
這樣的結果就是被加入的 Class 和目前的 Class 是一個低耦合狀態，不需要因為修改一個 Class 而連帶修改其他的 Class。

### 優點

- 開發的時候夠有彈性。

### 缺點

- 容易產生過多的 Object。

### 使用時機

當我們覺得當 A 有 X 能力的時候，像是`鳥`可以`飛`，就可以把 fly 當作變數加入鳥的 Class 裡。

---

## Law of Demeter

### 定義

- 又稱作“最少知識法則”或“don’t talk to strangers”。
- 如果一個 Object 知道了太多不屬於他本身的內容，則代表他和其他 Object 之間的`耦合程度`越高，在面對需要變更的時候難以修改。目的是要降低物件之間的`依賴關係`。
  > a method f of a class C should only call the methods of these:
  >
  > - C
  > - An object held in an instance variable of C.
  > - An object created by f
  > - An object passed as an argument to f
  > - global variables
- 要先區分 Object 和 Data Structure，Object 這種以 Method 為核心的，才適用 Law of Demeter，Data structure 是以資料為核心，存取資料並不涉及行為，不違反 Law of Demeter。

### 如何不違反

#### Example 1 - 避免 method chainning

```java
public boolean isValidEmployee(Employee employee) {
        String primaryEmailAddress = employee.getEmail().getPrimaryEmailAddress();
        long mobile = employee.getContactNumber().getMobile();
        if (primaryEmailAddress != null && mobile != 0) {return true;}
        return false;
    }
```

```java
public boolean isValidEmployee(Employee employee) {
        //把檢查的責任歸屬放在employee內部
        boolean isValidPrimaryEmailAddress = employee.isValidPrimaryEmailAddress();
        boolean isValidMobile = employee.isValidMobile();
        if (isValidPrimaryEmailAddress && isValidMobile) {return true;}
        return false;
    }
```

#### Example 2 - 只傳入函式`需要知道`的資訊。

```java
public class Game
{
    public Board board { get; private set; }
    public Game()
    {
        board = new Board();
    }

    public void MarkBoard(int space, string marker)
    {
        board.spaces[space] = marker; //有問題
    }
}

public class Board
{
    public string[] spaces {get; private set;}

    public Board()
    {
        spaces = new string[] {"0", "1", "2", "3", "4", "5", "6", "7", "8"};
    }
}
```

```java
public class Game
{
    public Board board { get; private set; }

    public Game()
    {
        board = new Board();
    }

    public MarkBoard(int space, string marker)
    {
        board.Mark(space, marker) //呼叫board內的Mark實作。
    }
}

public class Board
{
    public string[] spaces {get; private set;}

    public Mark(int space, string marker)
    {
        spaces[space] = marker
    }

    public Board()
    {
        spaces = new string[] {"0", "1", "2", "3", "4", "5", "6", "7", "8"};
    }
}
```

---

## Inversion of Control (IoC)

### 定義

Program 應該要依賴於抽象化介面，而不是實作細節，介面的功能應該以 Client 端的觀點定義。

### 概念舉例

今天有電腦(高層次)和記憶體(低層次)，還沒有實行 IoC 之前，電腦規格會`依賴`記憶體，如果`更改記憶品牌`則會導致問題，因為記憶體的細節規格不同。
IoC 的概念就是，應該要有 Interface 來把`控制權轉換到Interface上`，也就是名稱中 Inversion 的意思，電腦和 Interface 通常是 bundle 在一起的，實行後情況變成是，電腦依賴 Interface，記憶體也依賴 Interface ，也就是控制反轉了。

---

## Dependency Injection(DI)

### 定義

傳統產生物件時，物件會自己產生自己需要的 dependency。
而 DI 則是產生物件時，此物件需要的 dependency 需由 Client 端提供，像是注入一樣。

### 相關原則

衍生自相關原則：

- S.O.L.I.D. Principle 中的 `Dependency Inversion principle`
- `Inversion of Control（IoC)`

### 概念

- Object Composition
- Object Lifetime Management
- Object Interception(Cross-Cutting-Concern)

### Dependency Injection vs Composition

兩種都是把別的 Object 加入自己的 local variable 中，差異在哪？

```java
//Dependency Injection
class Employee {
    private Address address;

    public Employee( Address newAddress //注入 ) {
        this.address = newAddress; // 差異點
    }

    public Address getAddress() {
    return this.address;
    }
    public void setAddress( Address newAddress //注入 ) {
        this.address = newAddress;
    }
}
```

```java
//Composition
final class Car {
  private final Engine engine;

  Car(EngineSpecs specs) {
    engine = new Engine(specs);
  }

  void move() {
    engine.work();
  }
}
```

Dependency Injection: `Address` 和 `Employee` 彼此獨立存在，相互依賴。
Composition: The `Engine` 存在 `Car` 當中。

### Dependency Injection v.s. Functional Programming

參考: [Dependency rejection by Mark Seemann](https://blog.ploeh.dk/2017/02/02/dependency-rejection/)

#### DI 跟 FP 的差異點在哪裡？

- OO 跟 FP 的概念其實是根本上不同，FP 希望 function 是 pure 的，但 Dependecy 在 FP 的角度基本上是 impure，所以 Pure function 不能呼叫 impure function。
- 但是 impure function 可以呼叫 pure function

---

## 實行 Inversion of Control 的實際步驟

![IoC Steps](/img/general/1-clean-code-note/ioc-step.png "IoC Steps")

1. Tightly coupled classes
2. Implement IoC using factory pattern
3. Implement DIP by creating abstraction
4. Implement Dependency Injection
5. DI container
6. Loosely coupled classes

## Example

1. Tightly coupled classes

```java

class Computer {

    // 依賴於低階模組：『具體』的英雄聯盟，而非 『抽象』的遊戲
    private LOL lol;

    public Computer() {
        lol = new LOL();
    }

    public Computer(LOL lol) {
        this.lol = lol;
    }

    public void playGame() {
        if (lol != null)
            lol.play();
    }
}

class LOL {
    public void play() {
        System.out.print("LOL");
    }
}
```

2. Implement IoC using factory pattern

```java

class Computer {
    public void playLOL() {
        LOL lol = new LOL();
        lol.play();
    }
    public void playWarcraft() {
        Warcraft warcraft = new Warcraft();
        lol.play();
    }
}

class LOL {
    public void play() {
        System.out.print("LOL");
    }
}
class Warcraft {
    public void play() {
        System.out.print("Warcraft");
    }
}
```

4. Implement Dependency Injection

```java

public class Main {
    public static void main(String[] args) {
        GameFactory factory = new ImplGameFactory();
        Game game = factory.createGame();
        Computer computer = new Computer(game);
    }
}

class Computer {
    private Game game;
    // Constructor Injection
    public Computer(Game game) {
        this.game = game;
    }
    ...
}
```

---

## Reference

- Clean Code
- [The Law of Demeter](https://medium.com/@BobGuBobGu/the-law-of-demeter-ec5b7362ce87)
- [Dependency Injection 是什麼？](https://zxuanhong.medium.com/dependency-injection%E6%98%AF%E4%BB%80%E9%BA%BC-ae83f7f87d6d)
- [Difference between dependency and composition?](https://stackoverflow.com/questions/21022012/difference-between-dependency-and-composition)
- [Dependency rejection by Mark Seemann](https://blog.ploeh.dk/2017/02/02/dependency-rejection/)
- [控制反轉 (IoC) 與 依賴注入 (DI)](https://notfalse.net/3/ioc-di)
