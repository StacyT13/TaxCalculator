"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const tax = parseFloat($("#tax").value);
    const sale = parseFloat($("#sale").value);

    if (isNaN(sale) || sale <= 0) {
        alert(getErrorMsg("Sales Amount"));
        focusAndSelect("#sale");
    } else if (isNaN(tax) || tax <= 0 || tax >= 100) {
        alert(getErrorMsg("tax"));
        focusAndSelect("#tax"); 
    } else {
        $("#total").value = (sale + calculateTax(sale,tax)).toFixed(2);
    }
};

const calculateTax = (subtotal, taxRate) => {
    const taxAmount = subtotal * taxRate/100;
    return taxAmount;
};

var clearEntries = () => {
    $("#tax").value = "";
    $("#sale").value = "";
    $("#total").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#tax").focus();
});