import type { MetaFunction } from "react-router"
import { ConceptLayout } from "../../components/ConceptLayout"
import { CodeBlock } from "../../components/CodeBlock"
import { LanguageTabs } from "../../components/LanguageTabs"
import type { Language } from "../../components/LanguageTabs"

export const meta: MetaFunction = () => [
  { title: "Classes | Concepts | Marty Bonacci" },
  {
    name: "description",
    content:
      "Understanding classes across C++, C#, Python, TypeScript, and PHP using a Snowboard class example.",
  },
]

export default function ClassesPage() {
  return (
    <ConceptLayout title="Classes in Five Languages">
      <p>
        Classes are one of those ideas that clicks once you see it across a few
        languages. The syntax changes, but the concept stays the same: you are
        defining a blueprint that bundles data and behavior together. We will
        walk through a <code>Snowboard</code> class — because snowboards have
        real, measurable properties that make sense as code — and build it up
        step by step in C++, C#, Python, TypeScript, and PHP.
      </p>

      {/* Section 1: What is a class? */}
      <h2>What is a class?</h2>
      <p>
        A class is a blueprint for creating objects. Think of it like a
        manufacturing spec for a snowboard — it defines what properties every
        board will have (length, width, sidecut radius, flex rating) and what
        behaviors it can perform (calculate its effective edge, for example).
        The class itself is not a snowboard. It is the plan. When you
        instantiate that class, <em>then</em> you get an actual snowboard
        object with real values.
      </p>
      <p>
        Every language has its own way of expressing this, but the core idea is
        always the same: bundle data (properties) and behavior (methods) into a
        single unit. Let us see how each language defines a basic class.
      </p>

      <LanguageTabs>
        {(lang: Language) => {
          if (lang === "C++")
            return (
              <CodeBlock language="C++" filename="Snowboard.h">
{`class Snowboard {
    // A class groups related data and behavior
    // Properties = data, Methods = behavior
private:
    float length;
    float width;
    float sidecut;
    int flex;
};`}
              </CodeBlock>
            )
          if (lang === "C#")
            return (
              <CodeBlock language="C#" filename="Snowboard.cs">
{`public class Snowboard
{
    // A class groups related data and behavior
    // Properties = data, Methods = behavior
    private float length;
    private float width;
    private float sidecut;
    private int flex;
}`}
              </CodeBlock>
            )
          if (lang === "Python")
            return (
              <CodeBlock language="Python" filename="snowboard.py">
{`class Snowboard:
    """A class groups related data and behavior.
    Properties = data, Methods = behavior."""

    # Python classes define their data in __init__
    # We'll see that in the next section
    pass`}
              </CodeBlock>
            )
          if (lang === "TypeScript")
            return (
              <CodeBlock language="TypeScript" filename="Snowboard.ts">
{`class Snowboard {
  // A class groups related data and behavior
  // Properties = data, Methods = behavior
  private length: number
  private width: number
  private sidecut: number
  private flex: number
}`}
              </CodeBlock>
            )
          if (lang === "PHP")
            return (
              <CodeBlock language="PHP" filename="Snowboard.php">
{`<?php

class Snowboard
{
    // A class groups related data and behavior
    // Properties = data, Methods = behavior
    private float $length;
    private float $width;
    private float $sidecut;
    private int $flex;
}`}
              </CodeBlock>
            )
          return null
        }}
      </LanguageTabs>

      {/* Section 2: How is a class defined? */}
      <h2>How is a class defined?</h2>
      <p>
        Now let us give our class a constructor — the special method that runs
        when you create a new object. The constructor is where you set the
        initial values for your properties. Every language has a different
        syntax for this, but the job is always the same: take in some values
        and assign them to the object being created.
      </p>
      <p>
        Notice how each language handles private fields and initialization
        differently. C++ separates the header declaration from the
        constructor body. C# uses a clean property syntax. Python uses{" "}
        <code>self</code> and <code>__init__</code>. TypeScript lets you
        declare and assign in the constructor parameters. PHP uses typed
        properties with a constructor.
      </p>

      <LanguageTabs>
        {(lang: Language) => {
          if (lang === "C++")
            return (
              <CodeBlock language="C++" filename="Snowboard.h">
{`class Snowboard {
private:
    float length;
    float width;
    float sidecut;
    int flex;

public:
    Snowboard(float length, float width, float sidecut, int flex)
        : length(length), width(width), sidecut(sidecut), flex(flex)
    {
    }
};`}
              </CodeBlock>
            )
          if (lang === "C#")
            return (
              <CodeBlock language="C#" filename="Snowboard.cs">
{`public class Snowboard
{
    public float Length { get; private set; }
    public float Width { get; private set; }
    public float Sidecut { get; private set; }
    public int Flex { get; private set; }

    public Snowboard(float length, float width, float sidecut, int flex)
    {
        Length = length;
        Width = width;
        Sidecut = sidecut;
        Flex = flex;
    }
}`}
              </CodeBlock>
            )
          if (lang === "Python")
            return (
              <CodeBlock language="Python" filename="snowboard.py">
{`class Snowboard:
    """Blueprint for a snowboard with core geometry properties."""

    def __init__(self, length: float, width: float, sidecut: float, flex: int):
        self._length = length
        self._width = width
        self._sidecut = sidecut
        self._flex = flex`}
              </CodeBlock>
            )
          if (lang === "TypeScript")
            return (
              <CodeBlock language="TypeScript" filename="Snowboard.ts">
{`class Snowboard {
  private length: number
  private width: number
  private sidecut: number
  private flex: number

  constructor(length: number, width: number, sidecut: number, flex: number) {
    this.length = length
    this.width = width
    this.sidecut = sidecut
    this.flex = flex
  }
}`}
              </CodeBlock>
            )
          if (lang === "PHP")
            return (
              <CodeBlock language="PHP" filename="Snowboard.php">
{`<?php

class Snowboard
{
    private float $length;
    private float $width;
    private float $sidecut;
    private int $flex;

    public function __construct(
        float $length,
        float $width,
        float $sidecut,
        int $flex
    ) {
        $this->length = $length;
        $this->width = $width;
        $this->sidecut = $sidecut;
        $this->flex = $flex;
    }
}`}
              </CodeBlock>
            )
          return null
        }}
      </LanguageTabs>

      {/* Section 3: How do you instantiate an object? */}
      <h2>How do you instantiate an object?</h2>
      <p>
        Defining a class just gives you the blueprint. To actually use it, you
        need to create an instance — a real object with real values. This is
        called <strong>instantiation</strong>. You call the constructor with
        your specific values, and the language hands you back an object.
      </p>
      <p>
        Here we are creating a snowboard with a 158cm length, 25.5cm waist
        width, 7.8m sidecut radius, and a flex rating of 6 (medium stiff).
        These are realistic specs for an all-mountain board. In every language,
        the pattern is roughly the same: call the class name with arguments,
        and store the result.
      </p>

      <LanguageTabs>
        {(lang: Language) => {
          if (lang === "C++")
            return (
              <CodeBlock language="C++" filename="main.cpp">
{`#include "Snowboard.h"
#include <iostream>

int main() {
    // Stack allocation
    Snowboard board(158.0f, 25.5f, 7.8f, 6);

    // Or heap allocation with a pointer
    Snowboard* boardPtr = new Snowboard(158.0f, 25.5f, 7.8f, 6);

    // Don't forget to clean up heap-allocated objects
    delete boardPtr;

    return 0;
}`}
              </CodeBlock>
            )
          if (lang === "C#")
            return (
              <CodeBlock language="C#" filename="Program.cs">
{`// Create a new Snowboard instance
var board = new Snowboard(158.0f, 25.5f, 7.8f, 6);

// C# objects are always on the managed heap
// The garbage collector handles cleanup
Console.WriteLine($"Board length: {board.Length}cm");`}
              </CodeBlock>
            )
          if (lang === "Python")
            return (
              <CodeBlock language="Python" filename="main.py">
{`# Create a new Snowboard instance
# Python doesn't use "new" — just call the class like a function
board = Snowboard(158.0, 25.5, 7.8, 6)

# Python manages memory automatically with reference counting
print(f"Board length: {board.length}cm")`}
              </CodeBlock>
            )
          if (lang === "TypeScript")
            return (
              <CodeBlock language="TypeScript" filename="main.ts">
{`// Create a new Snowboard instance
const board = new Snowboard(158, 25.5, 7.8, 6)

// TypeScript compiles to JavaScript, which uses
// garbage collection for memory management
console.log("Board created:", board)`}
              </CodeBlock>
            )
          if (lang === "PHP")
            return (
              <CodeBlock language="PHP" filename="main.php">
{`<?php

require_once 'Snowboard.php';

// Create a new Snowboard instance
$board = new Snowboard(158.0, 25.5, 7.8, 6);

// PHP uses reference counting and a cycle collector
echo "Board created successfully\\n";`}
              </CodeBlock>
            )
          return null
        }}
      </LanguageTabs>

      {/* Section 4: Overloaded constructors */}
      <h2>Overloaded constructors</h2>
      <p>
        Sometimes you want more than one way to create an object. Maybe you
        want a default snowboard with preset values, or maybe you want the
        caller to specify everything. This is where{" "}
        <strong>constructor overloading</strong> comes in.
      </p>
      <p>
        Here is where the languages start to diverge. C++ and C# support true
        method overloading — you can define multiple constructors with
        different parameter lists, and the compiler picks the right one based
        on what you pass in. Python, TypeScript, and PHP do not support
        overloading in the same way. Instead, they use default parameter values
        to achieve a similar result. Same goal, different mechanism.
      </p>

      <LanguageTabs>
        {(lang: Language) => {
          if (lang === "C++")
            return (
              <CodeBlock language="C++" filename="Snowboard.h">
{`class Snowboard {
private:
    float length;
    float width;
    float sidecut;
    int flex;

public:
    // Default constructor — a preset all-mountain board
    Snowboard()
        : length(155.0f), width(25.0f), sidecut(8.0f), flex(5)
    {
    }

    // Parameterized constructor — caller specifies everything
    Snowboard(float length, float width, float sidecut, int flex)
        : length(length), width(width), sidecut(sidecut), flex(flex)
    {
    }
};

// Usage:
// Snowboard defaultBoard;                         // uses default
// Snowboard customBoard(158.0f, 25.5f, 7.8f, 6); // uses parameterized`}
              </CodeBlock>
            )
          if (lang === "C#")
            return (
              <CodeBlock language="C#" filename="Snowboard.cs">
{`public class Snowboard
{
    public float Length { get; private set; }
    public float Width { get; private set; }
    public float Sidecut { get; private set; }
    public int Flex { get; private set; }

    // Default constructor — a preset all-mountain board
    public Snowboard()
    {
        Length = 155.0f;
        Width = 25.0f;
        Sidecut = 8.0f;
        Flex = 5;
    }

    // Parameterized constructor — caller specifies everything
    public Snowboard(float length, float width, float sidecut, int flex)
    {
        Length = length;
        Width = width;
        Sidecut = sidecut;
        Flex = flex;
    }
}

// Usage:
// var defaultBoard = new Snowboard();                    // uses default
// var customBoard = new Snowboard(158.0f, 25.5f, 7.8f, 6); // uses parameterized`}
              </CodeBlock>
            )
          if (lang === "Python")
            return (
              <CodeBlock language="Python" filename="snowboard.py">
{`class Snowboard:
    """Python doesn't support true overloading.
    Instead, use default parameter values."""

    def __init__(
        self,
        length: float = 155.0,
        width: float = 25.0,
        sidecut: float = 8.0,
        flex: int = 5,
    ):
        self._length = length
        self._width = width
        self._sidecut = sidecut
        self._flex = flex

# Usage:
# default_board = Snowboard()                          # uses defaults
# custom_board = Snowboard(158.0, 25.5, 7.8, 6)       # overrides all
# partial_board = Snowboard(length=162.0, flex=8)      # mix and match`}
              </CodeBlock>
            )
          if (lang === "TypeScript")
            return (
              <CodeBlock language="TypeScript" filename="Snowboard.ts">
{`class Snowboard {
  private length: number
  private width: number
  private sidecut: number
  private flex: number

  // TypeScript uses optional params with defaults
  // instead of true overloading
  constructor(
    length: number = 155,
    width: number = 25.0,
    sidecut: number = 8.0,
    flex: number = 5
  ) {
    this.length = length
    this.width = width
    this.sidecut = sidecut
    this.flex = flex
  }
}

// Usage:
// const defaultBoard = new Snowboard()                // uses defaults
// const customBoard = new Snowboard(158, 25.5, 7.8, 6) // overrides all`}
              </CodeBlock>
            )
          if (lang === "PHP")
            return (
              <CodeBlock language="PHP" filename="Snowboard.php">
{`<?php

class Snowboard
{
    private float $length;
    private float $width;
    private float $sidecut;
    private int $flex;

    // PHP uses default parameter values
    // instead of true overloading
    public function __construct(
        float $length = 155.0,
        float $width = 25.0,
        float $sidecut = 8.0,
        int $flex = 5
    ) {
        $this->length = $length;
        $this->width = $width;
        $this->sidecut = $sidecut;
        $this->flex = $flex;
    }
}

// Usage:
// $defaultBoard = new Snowboard();                       // uses defaults
// $customBoard = new Snowboard(158.0, 25.5, 7.8, 6);    // overrides all
// $partialBoard = new Snowboard(length: 162.0, flex: 8); // named args (PHP 8+)`}
              </CodeBlock>
            )
          return null
        }}
      </LanguageTabs>

      {/* Section 5: Getters and setters */}
      <h2>Getters and setters</h2>
      <p>
        If properties are private — and they should be — you need a way to
        read and update them from outside the class. This is what getters and
        setters are for. They give you controlled access to internal data, and
        they let you add validation or side effects when a value changes.
      </p>
      <p>
        Each language has its own idiom for this. C++ uses explicit{" "}
        <code>get</code>/<code>set</code> methods. C# has a built-in property
        syntax with <code>get</code> and <code>set</code> accessors that looks
        clean and reads naturally. Python uses <code>@property</code>{" "}
        decorators so your getters and setters look like regular attribute
        access. TypeScript has <code>get</code>/<code>set</code> accessor
        keywords. PHP traditionally uses explicit methods or magic methods like{" "}
        <code>__get</code>/<code>__set</code>, but explicit methods are more
        common in practice.
      </p>

      <LanguageTabs>
        {(lang: Language) => {
          if (lang === "C++")
            return (
              <CodeBlock language="C++" filename="Snowboard.h">
{`class Snowboard {
private:
    float length;
    float width;
    float sidecut;
    int flex;

public:
    Snowboard(float length, float width, float sidecut, int flex)
        : length(length), width(width), sidecut(sidecut), flex(flex)
    {
    }

    // Getters — const because they don't modify the object
    float getLength() const { return length; }
    float getWidth() const { return width; }
    float getSidecut() const { return sidecut; }
    int getFlex() const { return flex; }

    // Setters — with validation
    void setFlex(int newFlex) {
        if (newFlex >= 1 && newFlex <= 10) {
            flex = newFlex;
        }
    }

    void setLength(float newLength) {
        if (newLength > 0) {
            length = newLength;
        }
    }
};`}
              </CodeBlock>
            )
          if (lang === "C#")
            return (
              <CodeBlock language="C#" filename="Snowboard.cs">
{`public class Snowboard
{
    // C# properties with get/set accessors
    // This is the idiomatic way — clean and concise
    public float Length { get; private set; }
    public float Width { get; private set; }
    public float Sidecut { get; private set; }

    // Property with validation in the setter
    private int _flex;
    public int Flex
    {
        get => _flex;
        set
        {
            if (value >= 1 && value <= 10)
                _flex = value;
        }
    }

    public Snowboard(float length, float width, float sidecut, int flex)
    {
        Length = length;
        Width = width;
        Sidecut = sidecut;
        Flex = flex;
    }
}`}
              </CodeBlock>
            )
          if (lang === "Python")
            return (
              <CodeBlock language="Python" filename="snowboard.py">
{`class Snowboard:
    def __init__(self, length: float, width: float, sidecut: float, flex: int):
        self._length = length
        self._width = width
        self._sidecut = sidecut
        self._flex = flex

    # @property makes a method act like an attribute
    @property
    def length(self) -> float:
        return self._length

    @length.setter
    def length(self, value: float) -> None:
        if value > 0:
            self._length = value

    @property
    def width(self) -> float:
        return self._width

    @property
    def sidecut(self) -> float:
        return self._sidecut

    @property
    def flex(self) -> int:
        return self._flex

    @flex.setter
    def flex(self, value: int) -> None:
        if 1 <= value <= 10:
            self._flex = value

# Usage looks like regular attribute access:
# board = Snowboard(158.0, 25.5, 7.8, 6)
# print(board.length)    # calls the getter
# board.flex = 8         # calls the setter with validation`}
              </CodeBlock>
            )
          if (lang === "TypeScript")
            return (
              <CodeBlock language="TypeScript" filename="Snowboard.ts">
{`class Snowboard {
  private _length: number
  private _width: number
  private _sidecut: number
  private _flex: number

  constructor(length: number, width: number, sidecut: number, flex: number) {
    this._length = length
    this._width = width
    this._sidecut = sidecut
    this._flex = flex
  }

  // TypeScript get/set accessors
  get length(): number {
    return this._length
  }

  set length(value: number) {
    if (value > 0) {
      this._length = value
    }
  }

  get width(): number {
    return this._width
  }

  get sidecut(): number {
    return this._sidecut
  }

  get flex(): number {
    return this._flex
  }

  set flex(value: number) {
    if (value >= 1 && value <= 10) {
      this._flex = value
    }
  }
}

// Usage looks like property access:
// const board = new Snowboard(158, 25.5, 7.8, 6)
// console.log(board.length)  // calls the getter
// board.flex = 8             // calls the setter with validation`}
              </CodeBlock>
            )
          if (lang === "PHP")
            return (
              <CodeBlock language="PHP" filename="Snowboard.php">
{`<?php

class Snowboard
{
    private float $length;
    private float $width;
    private float $sidecut;
    private int $flex;

    public function __construct(
        float $length,
        float $width,
        float $sidecut,
        int $flex
    ) {
        $this->length = $length;
        $this->width = $width;
        $this->sidecut = $sidecut;
        $this->flex = $flex;
    }

    // PHP uses explicit getter/setter methods
    public function getLength(): float
    {
        return $this->length;
    }

    public function getWidth(): float
    {
        return $this->width;
    }

    public function getSidecut(): float
    {
        return $this->sidecut;
    }

    public function getFlex(): int
    {
        return $this->flex;
    }

    public function setFlex(int $value): void
    {
        if ($value >= 1 && $value <= 10) {
            $this->flex = $value;
        }
    }

    public function setLength(float $value): void
    {
        if ($value > 0) {
            $this->length = $value;
        }
    }
}

// Usage:
// $board = new Snowboard(158.0, 25.5, 7.8, 6);
// echo $board->getLength();  // 158.0
// $board->setFlex(8);        // validated before setting`}
              </CodeBlock>
            )
          return null
        }}
      </LanguageTabs>

      {/* Section 6: A calculate method */}
      <h2>A calculate method</h2>
      <p>
        A class is not just a container for data — it should also contain
        behavior that operates on that data. Let us add a{" "}
        <code>calculateEffectiveEdge()</code> method that computes the
        effective edge length of the snowboard.
      </p>
      <p>
        The effective edge is the portion of the board's edge that actually
        makes contact with the snow when you are carving a turn. It is roughly
        the total length minus twice the sidecut radius (the curved portions
        at the nose and tail). A longer effective edge means more stability
        at speed; a shorter one makes the board easier to spin and maneuver.
        The formula is simple: <code>length - (2 * sidecut)</code>.
      </p>

      <LanguageTabs>
        {(lang: Language) => {
          if (lang === "C++")
            return (
              <CodeBlock language="C++" filename="Snowboard.h">
{`class Snowboard {
private:
    float length;
    float width;
    float sidecut;
    int flex;

public:
    Snowboard(float length, float width, float sidecut, int flex)
        : length(length), width(width), sidecut(sidecut), flex(flex)
    {
    }

    // Calculate the contact edge between the bindings
    float calculateEffectiveEdge() const {
        return length - (2.0f * sidecut);
    }
};

// Usage:
// Snowboard board(158.0f, 25.5f, 7.8f, 6);
// float edge = board.calculateEffectiveEdge(); // 142.4`}
              </CodeBlock>
            )
          if (lang === "C#")
            return (
              <CodeBlock language="C#" filename="Snowboard.cs">
{`public class Snowboard
{
    public float Length { get; private set; }
    public float Width { get; private set; }
    public float Sidecut { get; private set; }
    public int Flex { get; private set; }

    public Snowboard(float length, float width, float sidecut, int flex)
    {
        Length = length;
        Width = width;
        Sidecut = sidecut;
        Flex = flex;
    }

    // Calculate the contact edge between the bindings
    public float CalculateEffectiveEdge()
    {
        return Length - (2.0f * Sidecut);
    }
}

// Usage:
// var board = new Snowboard(158.0f, 25.5f, 7.8f, 6);
// float edge = board.CalculateEffectiveEdge(); // 142.4`}
              </CodeBlock>
            )
          if (lang === "Python")
            return (
              <CodeBlock language="Python" filename="snowboard.py">
{`class Snowboard:
    def __init__(self, length: float, width: float, sidecut: float, flex: int):
        self._length = length
        self._width = width
        self._sidecut = sidecut
        self._flex = flex

    def calculate_effective_edge(self) -> float:
        """Calculate the contact edge between the bindings.

        Returns the length of edge that touches the snow during a carve.
        """
        return self._length - (2 * self._sidecut)

# Usage:
# board = Snowboard(158.0, 25.5, 7.8, 6)
# edge = board.calculate_effective_edge()  # 142.4`}
              </CodeBlock>
            )
          if (lang === "TypeScript")
            return (
              <CodeBlock language="TypeScript" filename="Snowboard.ts">
{`class Snowboard {
  private length: number
  private width: number
  private sidecut: number
  private flex: number

  constructor(length: number, width: number, sidecut: number, flex: number) {
    this.length = length
    this.width = width
    this.sidecut = sidecut
    this.flex = flex
  }

  /** Calculate the contact edge between the bindings */
  calculateEffectiveEdge(): number {
    return this.length - (2 * this.sidecut)
  }
}

// Usage:
// const board = new Snowboard(158, 25.5, 7.8, 6)
// const edge = board.calculateEffectiveEdge() // 142.4`}
              </CodeBlock>
            )
          if (lang === "PHP")
            return (
              <CodeBlock language="PHP" filename="Snowboard.php">
{`<?php

class Snowboard
{
    private float $length;
    private float $width;
    private float $sidecut;
    private int $flex;

    public function __construct(
        float $length,
        float $width,
        float $sidecut,
        int $flex
    ) {
        $this->length = $length;
        $this->width = $width;
        $this->sidecut = $sidecut;
        $this->flex = $flex;
    }

    /** Calculate the contact edge between the bindings */
    public function calculateEffectiveEdge(): float
    {
        return $this->length - (2 * $this->sidecut);
    }
}

// Usage:
// $board = new Snowboard(158.0, 25.5, 7.8, 6);
// $edge = $board->calculateEffectiveEdge(); // 142.4`}
              </CodeBlock>
            )
          return null
        }}
      </LanguageTabs>

      <h2>Wrapping up</h2>
      <p>
        That is the foundation of classes in five languages. The syntax
        changes — curly braces vs. colons, <code>this</code> vs.{" "}
        <code>self</code> vs. <code>$this</code> — but the concepts are
        identical everywhere. You define a blueprint with properties and a
        constructor, create instances of it, control access through getters
        and setters, and add methods that operate on the object's data. Once
        you internalize this pattern, picking up a new language's class syntax
        takes minutes, not hours.
      </p>
    </ConceptLayout>
  )
}
