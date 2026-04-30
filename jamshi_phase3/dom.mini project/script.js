// 1. Dynamic List - Add item with validation
document.getElementById("addBtn").onclick = function() {
    const input = document.getElementById("itemInput");
    const itemText = input.value.trim();
    
    // Validate minimum 3 characters
    if (itemText.length < 3) {
        alert("Please enter at least 3 characters");
        return;
    }
    
    // Create new list item
    const li = document.createElement("li");
    li.textContent = itemText;
    
    // Append to list
    document.getElementById("itemList").appendChild(li);
    
    // Clear input field
    input.value = "";
};

// 2. To-Do List - Add task with delete button
document.getElementById("addTaskBtn").onclick = function() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    
    // Check for empty input
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
    
    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;
    
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    
    // Add delete functionality
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    // Append button to list item
    li.appendChild(deleteBtn);
    
    // Append list item to task list
    document.getElementById("taskList").appendChild(li);
    
    // Clear input field
    input.value = "";
};

// 3. Toggle Button - Hide/Show text
document.getElementById("toggleBtn").onclick = function() {
    const text = document.getElementById("helloText");
    
    if (text.style.display === "none") {
        text.style.display = "block";
        this.textContent = "Hide";
    } else {
        text.style.display = "none";
        this.textContent = "Show";
    }
};