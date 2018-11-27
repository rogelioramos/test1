var xhr=new XMLHttpRequest();
window.onload=function()
{
	document.getElementById('btnSuma').addEventListener("click",sumaNumeros);
	document.getElementById('btnResta').addEventListener("click",restaNumeros);
	document.getElementById('btnMulti').addEventListener("click",multiplicacionNumeros);
	document.getElementById('btnDivi').addEventListener("click",divisionNumeros);	
}

function sumaNumeros()
{
	var nombreTextboxNumero1=document.getElementById('txtNumero1').name;
	var nombreTextboxNumero2=document.getElementById('txtNumero2').name;
	var valorTextboxNumero1=document.getElementById('txtNumero1').value; //Si no ponemos .value nos regresa la caja completa
	//console.log(valorTextboxNumero1);
	var valorTextboxNumero2=document.getElementById('txtNumero2').value;
	/* Este xhr.open y el de abajo son lo mismo. Funcionan igual, sólo que en esta línea se deben de declarar las variables nombreTextboxNumero1 y nombreTextboxNumero1 de arriba.	 	xhr.open("GET","SumaNumerosServlet?"+nombreTextboxNumero1+"="+valorTextboxnumero1+"&"+nombreTextboxNumero2+"="+valorTextboxnumero2); El signo de interrogación cerrando y los textBox para que funcione asincrono, por eso usamos el GET, porque por el POST sería hace esto en automático.
	No existe un submit Asincrono, por eso tenemos que hacerlo manualmente.*/
	xhr.open("GET","SumaNumerosServlet?txtNumero1="+valorTextboxNumero1+"&txtNumero2="+valorTextboxNumero2);
	xhr.onload=funcionCallBack;
	xhr.send(null);
}

function restaNumeros()
{
	var valorTextboxNumero1=document.getElementById('txtNumero1').value;
	var valorTextboxNumero2=document.getElementById('txtNumero2').value;
	xhr.open("GET","RestaNumerosServlet?txtNumero1="+valorTextboxNumero1+"&txtNumero2="+valorTextboxNumero2);
	xhr.onload=funcionCallBack;
	xhr.send(null);
}

function multiplicacionNumeros()
{
	var valorTextboxNumero1=document.getElementById('txtNumero1').value;
	var valorTextboxNumero2=document.getElementById('txtNumero2').value;
	xhr.open("GET","MultiplicacionNumerosServlet?txtNumero1="+valorTextboxNumero1+"&txtNumero2="+valorTextboxNumero2);
	xhr.onload=funcionCallBack;
	xhr.send(null);
}

function divisionNumeros()
{
	var valorTextboxNumero1=document.getElementById('txtNumero1').value;
	var valorTextboxNumero2=document.getElementById('txtNumero2').value;
	xhr.open("GET","DivisionNumerosServlet?txtNumero1="+valorTextboxNumero1+"&txtNumero2="+valorTextboxNumero2);
	xhr.onload=funcionCallBack;
	xhr.send(null);
}


function funcionCallBack()
{
	document.getElementById('txtResultado').value=xhr.responseText;
}