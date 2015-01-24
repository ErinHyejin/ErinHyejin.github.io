#when to use instance variables, instance methods, etc

class Dog
  def initialize(name)
    @name = name
  end 

  def bark
    p "#{@name} barks: Bow wow! Woof woof!"
  end

  def eat(item)
    if item == "chicken jerky"
      p "My favorite treat chicken jerky! Yum."
    else
      p "#{item} is yummy, but I want chicken jerky."
    end
  end 

  def self.take_a_walk
    p "Best day of my life!"
  end
end  


mydog = Dog.new("Lulu")
mydog.bark
mydog.eat("soup")

Dog.take_a_walk

