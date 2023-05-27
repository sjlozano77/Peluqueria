<?php class MySQL{
  private $conexion; 
  private $total_consultas;
 
 public function __construct() {
        if(!isset($this->conexion)){
          $this->conexion = (mysqli_connect("localhost","root","", "peluqueria"))
            or die;
        }
    }

  public function consulta($consulta){ 
    $this->total_consultas++; 
    $resultado = mysqli_query($this->conexion,$consulta);
    if(!$resultado){ 
      echo 'ERROR';
      exit;
    }
    return $resultado;
  }

  public function fetch_array($consulta){
   return mysqli_fetch_array($consulta);
  }

  public function fetch_row($consulta){
   return mysqli_fetch_row($consulta);
  }

  public function num_rows($consulta){
   return mysqli_num_rows($consulta);
  }

  public function getTotalConsultas(){
   return $this->total_consultas; 
  }

/*

SELECT * FROM reservas WHERE estado = "confirmado"
SELECT * FROM reservas WHERE estado = "pendiente"
SELECT * FROM reservas WHERE estado = "cancelado"

SELECT * FROM reservas WHERE dia = "lunes"
SELECT * FROM reservas WHERE dia = "martes"
SELECT * FROM reservas WHERE dia = "miercoles"
*/


}?>