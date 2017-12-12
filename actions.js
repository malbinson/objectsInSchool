function listItems() {
    var selection = document.getElementById("list").value;
    var items = allItems[selection];
    var result = "";

    for(var i = 0; i<items.length; i++) {
        for(key in items[i]) {
            result += items[i][key] + " ";
        }
        result += "<br>";
    }
    document.getElementById("listOutput").innerHTML = result;
}

function addItems() {

}

function populateLists() {
    console.log(allItems);
    for(var i=0;i<allItems[0].length;i++) {
        document.getElementById("studentList").innerHTML +=
            "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>"
    }
    for(var j=0;j<allItems[1].length;j++) {
        document.getElementById("teacherList").innerHTML +=
            "<option>" + allItems[1][j].firstName + " " + allItems[1][j].lastName + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
        document.getElementById("sectionList").innerHTML +=
            "<option>" + allItems[2][k].name + "</option>"
    }
}

function addStudent() {
    var firstName = document.getElementById("sfn").value;
    var lastName = document.getElementById("sln").value;
    var grade = document.getElementById("sg").value;

    allStudents.push(new Student(firstName,lastName,grade));
    document.getElementById("confirm").innerHTML = "Student Added";
    clearBoxes();
}

function addTeacher() {
    var firstName = document.getElementById("tfn").value;
    var lastName = document.getElementById("tln").value;
    var subject = document.getElementById("ts").value;

    allTeachers.push(new Teacher(firstName,lastName,subject));
    document.getElementById("confirm").innerHTML = "Teacher Added";
    clearBoxes();
}

function addSection() {
    var name = document.getElementById("sn").value;
    var count = document.getElementById("sc").value;

    allSections.push(new Section(name,count));
    document.getElementById("confirm").innerHTML = "Section Added";
    clearBoxes();
}

function clearBoxes() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i< elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
 }

