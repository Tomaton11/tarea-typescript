/* ### Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript

En este ejercicio, desarrollarás un sistema de historial para registrar diferentes tipos de acciones que un usuario puede realizar en una aplicación, utilizando los principios de Programación Orientada a Objetos (POO) en TypeScript. Se implementarán clases base y derivadas, y se usará polimorfismo para manejar diversas acciones.

### Objetivos

1. **Crear una clase base `Accion`** que sirva como base para las diferentes acciones.
2. **Definir clases derivadas** que extiendan de la clase `Accion` para representar acciones específicas, como `AccionInicioSesion`, `AccionActualizacionPerfil`, `AccionCierreSesion`, `AccionCompra`, y `AccionEnvioMensaje`.
3. **Implementar una clase `Historial`** para almacenar y manejar acciones utilizando métodos avanzados de arrays como `filter` y `forEach`.
4. **Incorporar propiedades específicas** en las clases derivadas para almacenar información particular sobre las acciones.

### Requisitos

#### 1. Clase Base `Accion`
- **Propiedades**:
  - `id`: número - Identificador único de la acción.
  - `descripcion`: string - Descripción de la acción.
  - `fecha`: Date - Fecha en que se realizó la acción.
- **Métodos**:
  - `mostrarDetalle()`: Imprime en la consola los detalles de la acción.

#### 2. Clases Derivadas

- **`AccionInicioSesion`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `dispositivo_origen`: string - Dispositivo desde el cual se inició la sesión.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de inicio de sesión.

- **`AccionCierreSesion`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `dispositivo_origen`: string - Dispositivo desde el cual se cerró la sesión.
    - `tiempo_de_sesion`: number - Duración de la sesión en minutos.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de cierre de sesión.

- **`AccionActualizacionPerfil`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `cambios`: `Cambio[]` - Array de objetos de tipo `Cambio`, cada uno representando un cambio realizado.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de actualización de perfil.

- **Clase `Cambio`** (utilizada en `AccionActualizacionPerfil`)
  - **Propiedades**:
    - `id_cambio`: number - Identificador único del cambio.
    - `valor_anterior`: string - Valor antes del cambio.
    - `nuevo_valor`: string - Valor después del cambio.
  - **Métodos**:
    - `mostrarCambio()`: Imprime los detalles del cambio.

- **`AccionCompra`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `productos`: string[] - Array de nombres de productos comprados.
    - `total`: number - Monto total de la compra.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de la compra.

- **`AccionEnvioMensaje`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `destinatario`: string - Nombre o dirección del destinatario.
    - `mensaje`: string - Contenido del mensaje.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos del envío de mensaje.

#### 3. Clase `Historial`
- **Propiedades**:
  - `acciones`: `Accion[]` - Array que contiene todas las acciones.
- **Métodos**:
  - `agregarAccion(accion: Accion)`: Agrega una nueva acción al historial.
  - `eliminarAccionPorID(id: number)`: Elimina una acción específica del historial usando su ID.
  - `eliminarTodo()`: Elimina todas las acciones del historial.
  - `mostrarHistorial()`: Muestra en la consola todas las acciones en el historial.

### Ejemplo de Esquema en JSON

A continuación se muestra un esquema JSON representativo del historial con objetos de cada tipo de acción:

```json
{
  "acciones": [
    {
    "id": 1,
      "descripcion": "Usuario inició sesión",
      "fecha": "2024-08-31T12:00:00Z",
      "dispositivo_origen": "PC de Escritorio"
    },
    {
      "id": 2,
      "descripcion": "Usuario actualizó su perfil",
      "fecha": "2024-08-31T12:05:00Z",
      "cambios": [
        {
          "id_cambio": 1,
          "valor_anterior": "correo@viejo.com",
          "nuevo_valor": "correo@nuevo.com"
        },
        {
          "id_cambio": 2,
          "valor_anterior": "1234",
          "nuevo_valor": "5678"
        }
      ]
    },
    {
      "id": 3,
      "descripcion": "Usuario cerró sesión",
      "fecha": "2024-08-31T12:30:00Z",
      "dispositivo_origen": "PC de Escritorio",
      "tiempo_de_sesion": 30
    },
    {
      "id": 4,
      "descripcion": "Usuario realizó una compra",
      "fecha": "2024-08-31T12:45:00Z",
      "productos": ["Laptop", "Ratón"],
      "total": 1500
    },
    {
      "id": 5,
      "descripcion": "Usuario envió un mensaje",
      "fecha": "2024-08-31T13:00:00Z",
      "destinatario": "admin@example.com",
      "mensaje": "Hola, necesito ayuda con mi cuenta."
    }
  ]
}
  */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Accion = /** @class */ (function () {
    function Accion(id, descripcion, fecha) {
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
    Accion.prototype.mostrarDetalle = function () {
        console.log(this.id, this.descripcion, this.fecha);
    };
    return Accion;
}());
var AccionInicioSesion = /** @class */ (function (_super) {
    __extends(AccionInicioSesion, _super);
    function AccionInicioSesion(id, descripcion, fecha, dispositivo_origen) {
        var _this = _super.call(this, id, descripcion, fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        return _this;
    }
    AccionInicioSesion.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Dispositivo:", this.dispositivo_origen);
    };
    return AccionInicioSesion;
}(Accion));
var AccionCierreSesion = /** @class */ (function (_super) {
    __extends(AccionCierreSesion, _super);
    function AccionCierreSesion(id, description, fecha, dispositivo_origen, tiempo_de_sesion) {
        var _this = _super.call(this, id, description, fecha) || this;
        _this.dispositivo_origen = dispositivo_origen;
        _this.tiempo_de_sesion = tiempo_de_sesion;
        return _this;
    }
    AccionCierreSesion.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Dispositivo:", this.dispositivo_origen);
        console.log("Tiempo de sesión:", this.tiempo_de_sesion, "minutos");
    };
    return AccionCierreSesion;
}(Accion));
var AccionActualizacionPerfil = /** @class */ (function (_super) {
    __extends(AccionActualizacionPerfil, _super);
    function AccionActualizacionPerfil(id, description, fecha, cambios) {
        var _this = _super.call(this, id, description, fecha) || this;
        _this.cambios = cambios;
        return _this;
    }
    AccionActualizacionPerfil.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Cambios:");
        this.cambios.forEach(function (cambio) { return cambio.mostrarCambio(); });
    };
    return AccionActualizacionPerfil;
}(Accion));
var Cambio = /** @class */ (function () {
    function Cambio(id_cambio, valor_anterior, nuevo_valor) {
        this.id_cambio = id_cambio;
        this.valor_anterior = valor_anterior;
        this.nuevo_valor = nuevo_valor;
    }
    Cambio.prototype.mostrarCambio = function () {
        console.log("Cambio número", this.id_cambio);
        console.log("Valor anterior:", this.valor_anterior);
        console.log("Nuevo valor:", this.nuevo_valor);
    };
    return Cambio;
}());
var AccionCompra = /** @class */ (function (_super) {
    __extends(AccionCompra, _super);
    function AccionCompra(id, description, fecha, productos, total) {
        var _this = _super.call(this, id, description, fecha) || this;
        _this.productos = productos;
        _this.total = total;
        return _this;
    }
    AccionCompra.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Productos comprados:", this.productos);
        console.log("Total:", this.total);
    };
    return AccionCompra;
}(Accion));
var AccionEnvioMensaje = /** @class */ (function (_super) {
    __extends(AccionEnvioMensaje, _super);
    function AccionEnvioMensaje(id, description, fecha, destinatario, mensaje) {
        var _this = _super.call(this, id, description, fecha) || this;
        _this.destinatario = destinatario;
        _this.mensaje = mensaje;
        return _this;
    }
    AccionEnvioMensaje.prototype.mostrarDetalle = function () {
        _super.prototype.mostrarDetalle.call(this);
        console.log("Destinatario:", this.destinatario);
        console.log("Mensaje:", this.mensaje);
    };
    return AccionEnvioMensaje;
}(Accion));
var Historial = /** @class */ (function () {
    function Historial() {
        this.acciones = [];
    }
    Historial.prototype.agregarAccion = function (accion) {
        this.acciones.push(accion);
    };
    Historial.prototype.eliminarAccionPorID = function (id) {
        this.acciones = this.acciones.filter(function (accion) { return accion.id !== id; });
    };
    Historial.prototype.eliminarTodo = function () {
        this.acciones = [];
    };
    Historial.prototype.mostrarHistorial = function () {
        console.log("Historial:");
        this.acciones.forEach(function (accion) { return accion.mostrarDetalle(); });
    };
    return Historial;
}());
var historial = new Historial();
historial.agregarAccion(new AccionInicioSesion(1, "Inicio de sesión", new Date(), "PC"));
historial.agregarAccion(new AccionActualizacionPerfil(2, "Actualización de perfil", new Date(), [new Cambio(1, "correo@viejo.com", "correo@nuevo.com")]));
historial.agregarAccion(new AccionCierreSesion(3, "Cierre de sesión", new Date(), "PC de Escritorio", 30));
historial.agregarAccion(new AccionCompra(4, "Compra", new Date(), ["Laptop", "Ratón"], 1500));
historial.agregarAccion(new AccionEnvioMensaje(5, "Envio de mensaje", new Date(), "admin@example.com", "Hola, necesito ayuda con mi cuenta."));
historial.mostrarHistorial();
