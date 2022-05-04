import React, { useState } from 'react';
import axios from 'axios';
import "../css/Formulario.css";
import { validation } from '../components/format.jsx';
import { Select, Form, Input, Button } from "antd";
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// seleccion multiple
const {Option} = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const Formulario = () => {
  const [Activity, setActivity] = useState([]);
  console.log(Activity);
  const [form] = Form.useForm();
  // const handleSubmit = (e) => { 
  //     e.preventDefault();
  //     const data = form.getFieldsValue();
  //     console.log(data);
  //     axios.post('https://finfastsoapapi.azurewebsites.net/api/test/getsecureprime', data, {
  //         headers: {
  //             PruebaTecnica: "PruebaTecnica"
  //         }
  //     })
  //     .then(res => {
  //         console.log(res.data);
  //     }
  //     )
  //     .catch(err => {
  //         console.log(err);
  //     }
  //     )
  // }

  const fetchGetActivity = (rut) => {
    axios
      .get(`https://finfastsoapapi.azurewebsites.net/api/test/getactivities?rut=${rut}`,
        {
          headers: {
            PruebaTecnica: "PruebaTecnica",
          }
        }
      )
      .then(res => {
        setActivity(res.data.dataList);

      }
      )
      .catch(err => {
        console.log("error al conseguir datos", err);
      }
      );
  };
  
  // const fetchGetSecurePrime = (payload) => {
  //   axios.post(`https://finfastsoapapi.azurewebsites.net/api/test/getsecureprime`, payload, {
  //     headers: {
  //       PruebaTecnica: "PruebaTecnica"
  //     }
  //   })
  //   .then(res => {
  //     if(res.data.success){
  //       alert(res.data.message);
  //     if (res.data.dataValue["securePrime"]) {
  //       alert(res.data.dataValue["securePrime"]);
  //     console.log(res.data.message);
  //     }
  //     }
  //   })
  //   .catch(() => {
  //     alert("error al conseguir datos");
  //   });
  // }

  const onFinish = values => {
    console.log(values);
  };

  return (
  <div className="backg">
    <div className="container1">
      <h1>Protege tu empresa con seguros <br /> 100% online</h1>
      <p>Responsabilidad Civil General para Empresas</p>
      <p>Protección Financiera para Empleadores</p>
    </div>

    <div 
    className="container container2 shadow-sm"
    >
      <Form
        form={form}
        autoComplete="off"
        layout="horizontal"
        onSubmit={onFinish}
      >
        <div className="row p-4">
          <div className="col-3">
            <Form.Item
              label="Rut empresa"
              name="rut"
              
              rules={[
                  {
                    required: true,
                    validator(_, item) {
                      if (item && validation(item)) {
                        fetchGetActivity(item)
                        return Promise.resolve();
                      }
                      return Promise.reject("Rut inválido");
                    },
                  },
              ]}
            >
              <Input placeholder="XXXXXXXX-X" />
            </Form.Item>
          </div>
          <div className="col-6">
            <Form.Item
              label="Actividad a asegurar"
              name="activitys"
              rules={[
                {
                  required: true,
                  message: "Por favor seleccione una o mas actividades",
                },
              ]}
            >
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Selecciona una o mas actividades"
                onChange={handleChange}
                optionLabelProp="label"
                defaultValue={Activity}
              >
                <Option value="465100" label="VENTA AL POR MAYOR DE COMPUTADORES, EQUIPO PERIFÉRICO Y PROGRAMAS INFORMÁTICOS">
                  <div className="demo-option-label-item">
                    VENTA AL POR MAYOR DE COMPUTADORES, EQUIPO PERIFÉRICO Y PROGRAMAS INFORMÁTICOS
                  </div>
                </Option>
                <Option value="620100" label="ACTIVIDADES DE PROGRAMACIÓN INFORMÁTICA">
                  <div className="demo-option-label-item">
                  ACTIVIDADES DE PROGRAMACIÓN INFORMÁTICA
                  </div>
                </Option>
                
              </Select>
            </Form.Item>           
          </div>
          <div className="col">
            <Form.Item>
              <button href="#" class="myButton">Cotizar seguro</button>
            </Form.Item>
          </div>
        </div>
      </Form>
      
    </div>

    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center pb-5">Responsabilidad Civil General <br/> para Empresas</h2>
          <p>Minim reprehenderit officia dolore non et est id et esse. Amet occaecat dolor non non adipisicing officia dolor officia eiusmod magna fugiat amet fugiat. Proident incididunt velit non ipsum veniam. Eiusmod eu exercitation ad cupidatat. Labore dolor ea elit voluptate Lorem sint ullamco laborum proident sit velit laboris nulla. Fugiat non irure enim consectetur ullamco non incididunt labore et non ad laboris exercitation veniam. Et sint dolor ipsum aliqua sunt id.Voluptate amet mollit laborum incididunt ea et mollit est aliquip exercitation irure est. Deserunt Lorem laborum incididunt exercitation ullamco incididunt enim incididunt cillum dolor minim id sint aliqua. Nostrud voluptate labore aute ex mollit. Cupidatat laboris irure excepteur amet laboris laboris voluptate elit. Minim reprehenderit elit nisi fugiat nostrud cupidatat do pariatur cupidatat sit eu cillum exercitation. Do aliquip officia esse eu est ullamco.</p>
        </div>
        <div className="col">
          <p className="text-center mt-5 pt-5 mb-2">PRINCIPALES <strong>COBERTURAS</strong></p>
          <p className="red-underlane col-4 m-auto"></p>
          <div className="row justify-content-center mt-4">
            <div className="col-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item pb-2">Responsabilidad Civil <br /> Cruzada</li>
                <li className="list-group-item">Responsabilidad Civil <br /> Patronal</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item pb-0">Responsabilidad Civil <br /> <p className="textmin">por transporte de Personas</p> </li>
                <li className="list-group-item">Defensa <br /> penal del Asegurado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center">
      <img src={require('../img/3_separador.png')} className="separador-test" alt="separador-test" />
    </div>

    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center pb-5">Responsabilidad Civil General <br/> para Empresas</h2>
          <p>Minim reprehenderit officia dolore non et est id et esse. Amet occaecat dolor non non adipisicing officia dolor officia eiusmod magna fugiat amet fugiat. Proident incididunt velit non ipsum veniam. Eiusmod eu exercitation ad cupidatat. Labore dolor ea elit voluptate Lorem sint ullamco laborum proident sit velit laboris nulla. Fugiat non irure enim consectetur ullamco non incididunt labore et non ad laboris exercitation veniam. Et sint dolor ipsum aliqua sunt id.Voluptate amet mollit laborum incididunt ea et mollit est aliquip exercitation irure est. Deserunt Lorem laborum incididunt exercitation ullamco incididunt enim incididunt cillum dolor minim id sint aliqua. Nostrud voluptate labore aute ex mollit. Cupidatat laboris irure excepteur amet laboris laboris voluptate elit. Minim reprehenderit elit nisi fugiat nostrud cupidatat do pariatur cupidatat sit eu cillum exercitation. Do aliquip officia esse eu est ullamco.</p>
        </div>
        <div className="col">
          <p className="text-center mt-5 pt-5 mb-2">PRINCIPALES <strong>COBERTURAS</strong></p>
          <p className="red-underlane col-4 m-auto"></p>
          <div className="row justify-content-center mt-4">
            <div className="col-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item pb-2">Responsabilidad Civil <br /> Cruzada</li>
                <li className="list-group-item">Responsabilidad Civil <br /> Patronal</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item pb-0">Responsabilidad Civil <br /> <p className="textmin">por transporte de Personas</p> </li>
                <li className="list-group-item">Defensa <br /> penal del Asegurado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};




export default Formulario
