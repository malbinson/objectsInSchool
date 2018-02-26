function listItems() {
    var selection = document.getElementById("list").value;
    var items = allItems[selection];
    var result = "";

    if(selection == 1) {
        //build students display table
    }
    if(selection == 2) {
        //build teachers display table
    }
    if(selection == 3) {
        //build sections display table
    }

    // ** short cut way to do this - do not use - make a table like above
    for(var i = 0; i<items.length; i++) {
        for(key in items[i]) {
            result += items[i][key] + " ";
        }
        result += "<br>";
    }
    // ** short cut way to do this - do not use - make a table like above

    document.getElementById("listOutput").innerHTML = result;
}

function addItems() {
    //needs to be implemented
}

function populateLists() {
    var students, sections, teachers;
    for(var i=0;i<allItems[0].length;i++) {
        students += "<option>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"
    }
    for(var j=0;j<allItems[1].length;j++) {
         teachers += "<option>" + allTeachers[j].firstName + " " + allTeachers[j].lastName + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
         sections += "<option>" + allSections[k].name + "</option>"
    }
    document.getElementById("studentList").innerHTML = students;
    document.getElementById("teacherList").innerHTML = teachers;
    document.getElementById("sectionList1").innerHTML = sections;
    document.getElementById("sectionList2").innerHTML = sections;
    document.getElementById("sectionList3").innerHTML = sections;
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

function listStudentsInSection() {

}

function clearBoxes() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
 }

