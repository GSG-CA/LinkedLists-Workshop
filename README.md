# Intro to Linked Lists

![](https://miro.medium.com/max/1134/1*JydPaHc6VTy6jwoBwP7_zg.png)

**Linked Lists** are one of the most popular data structures, it is mainly used for insertion and deletion operations.

We will touch on the basics of what a linked list is, and use Javascript to show a few fundamental methods to navigate and manipulate this data structure type.

## So, what is a Linked List?

A **linked list** is a common data structure made of a chain of **nodes** in which each node contains a **value** and a **pointer to the next node** in the chain.

There are three types of linked lists, but this workshop will only discuss singly-linked lists.

![](https://miro.medium.com/max/1400/1*XPu_eMJVmbO3GAC1acszYA.png)

The **head pointer** points to the first node, and the last element of the list points to null. When the list is empty, the head pointer points to null.

**Note:** We often create another pointer **tail pointer** so you wonder why?

![](https://i.imgur.com/QhKb0ym.png)

The tail pointer is useful when we want to insert a new element at the end of the list or delete the last one, It makes the time complexity for these operations **O(1)** because we don't have to walk from the head pointer until the end of the list, **and that will take an O(n) time complexity**.

Linked lists can dynamically increase in size and it is easy to insert and delete from a linked list because unlike arrays, we only need to change the pointers of the previous element and the next element to insert or delete an element.

Linked lists are typically used to create file systems, adjacency lists, and hash tables.

## Pointers

We mentioned the word **Pointer** multiple times but, **What is a Pointer** ?

A pointer is a **Reference** that holds the address of an object stored in memory. The pointer then simply points to the object.

In our case when dealing with linked lists we use pointers to point at a certain node in the list.

As we mentioned earlier, each node in the list contains a value and a pointer that points to the next node (logically next, not literally).

![](https://i.imgur.com/6ufOiDp.png)

## Properties of Linked Lists

### Linear

This becomes more clear when compared to a tree (A non-linear Data structure), where a parent node can have multiple children. But in a singly linked list, Each Element only has reference to the single next element except for the last element.

![](https://i.imgur.com/G3bif42.png)

### Dynamic

You might be thinking, why do I need linked lists, I already have arrays. However, arrays are stored in memory as a fixed chunk. Imagine a box, which is then divided into sections of equal size, each section is given an index value.

![](https://i.imgur.com/FU8mnLg.png)

A linked list can be visualized as many separate boxes, each box is linked to the next via a pointer. A linked list can dynamically grow and shrink based on your data & needs, making it much more flexible. As you add boxes, memory is allocated to store the new node's value and pointer.

## Building a linked list with Javascript

Like most data structures in JS, we will be utilizing classes. In this case, a class to build each node, and a class for the List itself.

You can think of a class as an object prototype that has properties and functions, we can create as many new copies of it as we want.

### The Node Class

![](https://i.imgur.com/wKFrtmS.png)

The Node class has two properties: **Data & Next**.

- **Data**: the data being stored, generally any type.
- **Next**: a reference to the next node in line. It defaults to null to indicate it is the tail if its next does not reference another node.

### The List Class

![](https://i.imgur.com/iw5cvcK.png)

The list itself generally has three properties

- **Head**: Referencing the first node in line
- **Tail**: Referencing the last node in line
- **Size**: Referencing the number of nodes currently in the list

**Note:** we will not create a tail pointer in our list so it will be easier to implement.

## Methods

There are plenty of ways one might wish to manipulate linked lists. We’ll go over a few basic ones here.

### Adding a node to the start of your list

![](https://i.imgur.com/lZp5X7C.png)

This snippet assumes your list is not empty. It takes assigns your new node as LinkedList’s current node. The added Nodes **NEXT** then references the head node prior to the insertion, effectively bumping it down the line. Then increment the size counter!

If you’re adding the first node to an empty list, the Node’s **NEXT** will be null. As it’s the only element, it is simultaneously the head and tail of your linked list.

### Adding a node to the end of your list

This one gets a little more complex, and we have to account for our first edge case if the list is currently empty.

![](https://i.imgur.com/ONm0YsR.png)

To add a node to the end of our linked list we need to traverse to the end of the list and change the tail node’s **NEXT** reference to the new node. Loop through your Nodes until current. next === null, then set that **NEXT** property to be your new node, but as you guessed this will not be needed if we created a tail pointer.

When our linked list is initialized it is empty, and its head property is set to null. Our if statement evaluates that edge case.

### Adding a node to a specified index

Now for something a little more involved.

![](https://i.imgur.com/rboVKTr.png)

As you can see, a lot more to account for on this one. Let’s start with our two edge case conditionals at the top.

**The first** is checking to see if the given index falls within the actual length of our list. If it's greater than the size of our list, we don’t want to do anything (You could add a log if you were so inclined).

**The second** checks if the index is 0, ie. the first element of the List. If so, let’s call our already made insertFirst() method on our data. This will add a new first node.

Now on to the meat of our function:

- We need to loop through our list, but we want to stop just before the index, for this, we need the iterator variable **count**. Each loop it’s going to increment and compare to the index passed in.
- We start at the head of our list, so current is defined with our head node. We also initialize a previous variable, which will hold the node just before our insertion.
- By the end of our loop, **current** will reference the node at our desired index, and **previous** will reference the node just before. So we want to set our new nodes **NEXT** to reference the node in the **current** variable, and our **previous** nodes **NEXT** to reference the new node.

### Deleting a node From a specified index

Pretty similar to insertAtIndex, but this time we want to essentially pluck out the node at the specified index.

![](https://i.imgur.com/EkXu9LN.png)

To do this, we set the **previous** nodes **NEXT** reference to the targets nodes **NEXT** reference. Effectively removing the node at the target index from the list.

Similar Edge cases once again, one checking to see if the index is valid within our list, the other to check if we’re deleting the head node.

We once again loop until our count is just short of the index input. This leaves the **current** variable referencing the node at our target index. All that’s left to do is pluck all reference to the target node out of our linked list.

Set the **previous** nodes **NEXT** to reference the **current** nodes **NEXT**, effectively removing all trace of the node in the target index.

### Printing out your linked list’s data

The last method we’re going to try today is printing out the data from each individual node in a linked list. This is a little less complex than the last two.

![](https://i.imgur.com/FS3al0W.png)

This method is going to loop through our Linked list from the head to the tail, and console.log each node’s data property.

- The **current** variable allows us to traverse down the list. At the end of each loop, we change it to the next node in line, so we can access its data.
- The while loop continues until **current** is no longer Truthy.

Remember that the tails **NEXT** property points to null, so once **current** is set to null, the loop breaks.

**Now let's see the fruit of all our labor logged onto a nice code snipped below**

![](https://i.imgur.com/VA7445A.png)

Each time we call insertFirst sets the new node to the head, meaning the last previous node gets bumped. In this case, the node with data: 10 was bumped down to the index 3, and then removed by our removeAtIndex(3).

## There is certainly more to learn

That's where we’re going to stop. There are loads of other ways to use and manipulate linked lists. You could delete a node based on its data value, or print out a node's data at a given index, it all depends on the problem you want to solve.

There are also other types of linked lists like Doubly, and Circular linked lists.

Here's a great [website](https://visualgo.net/en) that animates several data structures and some of their operations to help you under them better.

**Hopefully this gives you a place to start!**

### Exercise

implement the doubly linked list and the reverse method in singaly linked list

[Linked list Exercise](https://github.com/GSG-CA/LinkedList-Exercise)
