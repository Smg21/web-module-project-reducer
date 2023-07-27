# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* First when you click the 1 button it registers the click event. Then the eventHandler handleAddOne is executed, and then dispatches the addOne action. The action creator for addOne is then executed. Next it passes through the reducer which where the reducer logic is executed depending on the action type and then it updates the state with the new total. The use Reducer hook updates the states new value, the app re renders, and the total value is updated and displayed on the users end. 
...

* TotalDisplay shows the total plus 1.
