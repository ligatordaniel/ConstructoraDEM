  function validarFormulario(){
 
    var txtNombre = document.getElementById('nombre').value;
    var txtEdad = document.getElementById('edad').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtFecha = document.getElementById('fecha').value;
    var cmbSelector = document.getElementById('selector').selectedIndex;
    var chkEstado = document.getElementById('checkBox');
    var rbtEstado = document.getElementsByName('radioButton');
 
    var banderaRBTN = false;
 
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
      alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
      return false;
    }
 
    //Test edad
    if(txtEdad == null || txtEdad.length == 0 || isNaN(txtEdad)){
      alert('ERROR: Debe ingresar una edad');
      return false;
    }
 
    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
      alert('ERROR: Debe escribir un correo válido');
      return false;
    }
 
    //Test fecha
    if(!isNaN(txtFecha)){
      alert('ERROR: Debe elegir una fecha');
      return false;
    }
 
    //Test comboBox
    if(cmbSelector == null || cmbSelector == 0){
      alert('ERROR: Debe seleccionar una opcion del combo box');
      return false;
    }
 
    //Test checkBox
    if(!chkEstado.checked){
      alert('ERROR: Debe seleccionar el checkbox');
      return false;
    }
 
    //Test RadioButtons
    for(var i = 0; i < rbtEstado.length; i++){
      if(rbtEstado[i].checked){
        banderaRBTN = true;
        break;
      }
    }
    if(!banderaRBTN){
      alert('ERROR: Debe elegir una opción de radio button');
      return false;
    }
 
    return true;
  }