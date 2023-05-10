var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIML = '/api/iml';
var jpdbIRL = '/api/irl';
var stdntDBName = "SCHOOL-DB";
var stdntRelationName = "STUDENT-TABLE";
var connToken = "90933209|-31949279430472060|90950688";

$('#stdntrollno').focus();

function saveRecNo2LS(jsonObj){
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function getStudentRollAsJsonObj() {
    var stdntrollno = $("#stdntrollno").val();
    var jsonStr = {
        RollNo: stdntrollno
    };
    return JSON.stringify(jsonStr);
}


function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    // $("#stdntrollno").prop('disabled', false);
    $("#stdntname").prop('disabled', false);
    $("#stdntclass").prop('disabled', false);
    $("#stdntdob").prop('disabled', false);
    $("#stdntaddress").prop('disabled', false);
    $("#stdntenrolldate").prop('disabled', false);

    $("#stdntname").val(record.Name);
    $("#stdntclass").val(record.Class);
    $("#stdntdob").val(record.BirthDate);
    $("#stdntaddress").val(record.Address);
    $("#stdntenrolldate").val(record.EnrollDate);
}

function resetForm(){
    $('#stdntrollno').val("");
    $('#stdntname').val("");
    $('#stdntclass').val("");
    $('#stdntdob').val("");
    $('#stdntaddress').val("");
    $('#stdntenrolldate').val("");

    $("#stdntrollno").prop('disabled', false);
    $("#stdntname").prop('disabled', true);
    $("#stdntclass").prop('disabled', true);
    $("#stdntdob").prop('disabled', true);
    $("#stdntaddress").prop('disabled', true);
    $("#stdntenrolldate").prop('disabled', true);
    $("#save").prop('disabled', true);
    $("#update").prop('disabled', true);
    $("#reset").prop('disabled', true);
    
    $('#stdntrollno').focus();
}

function validateData(){
    var stdntrollno, stdntname, stdntclass, stdntdob, stdntaddress, stdntenrolldate;
    stdntrollno = $("#stdntrollno").val();
    stdntname = $("#stdntname").val();
    stdntclass = $("#stdntclass").val();
    stdntdob = $("#stdntdob").val();
    stdntaddress = $("#stdntaddress").val();
    stdntenrolldate = $("#stdntenrolldate").val();

    if(stdntrollno === ''){
        alert("Student Roll Number missing");
        $("#stdntrollno").focus();
        return "";
    }
    if(stdntname === ''){
        alert("Student Name missing");
        $("#stdntname").focus();
        return "";
    }
    if(stdntclass === ''){
        alert("Student Class missing");
        $("#empsal").focus();
        return "";
    }
    if(stdntdob === ''){
        alert("Date of Birth missing");
        $("#stdntdob").focus();
        return "";
    }
    if(stdntaddress === ''){
        alert("Address missing");
        $("#stdntaddress").focus();
        return "";
    }
    if(stdntenrolldate === ''){
        alert("Enrollment Date missing");
        $("#stdntenrolldate").focus();
        return "";
    }

    var jsonStrObj = {
        RollNo: stdntrollno,
        Name: stdntname,
        Class: stdntclass,
        BirthDate: stdntdob,
        Address: stdntaddress,
        EnrollDate: stdntenrolldate
    };

    return JSON.stringify(jsonStrObj);
}

function getStudent() {
    var stdntRollJsonObj = getStudentRollAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, stdntDBName, stdntRelationName, stdntRollJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if(resJsonObj.status === 400) {
        $("#stdntname").prop('disabled', false);
        $("#stdntclass").prop('disabled', false);
        $("#stdntdob").prop('disabled', false);
        $("#stdntaddress").prop('disabled', false);
        $("#stdntenrolldate").prop('disabled', false);

        $("#save").prop('disabled', false);
        $("#reset").prop('disabled', false);
        $("#stdntname").focus();
    }
    else if(resJsonObj.status === 200){
        $("#stdntrollno").prop('disabled', true);
        fillData(resJsonObj);

        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#stdntname").focus();
    }
}

function saveData(){
    var jsonStrObj = validateData();
    if(jsonStrObj === ''){
        return "";
    }
    var putRequest = createPUTRequest(connToken, jsonStrObj, stdntDBName, stdntRelationName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    alert("Student Details Added Successfully");
    resetForm();
    $('#stdntrollno').focus();
}

function updateData() {
    $('#update').prop('disabled', true);
    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, stdntDBName, stdntRelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    alert("Student Details Updated Successfull");
    // console.log(resJsonObj);
    resetForm();
    $('#stdntrollno').focus();
}
