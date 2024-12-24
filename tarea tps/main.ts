
class Accion {
	id: number;
	descripcion: string;
	fecha: Date;

	constructor(
		id: number,
		descripcion: string,
		fecha: Date
	) {
		this.id = id;
		this.descripcion = descripcion;
		this.fecha = fecha;
	}

	mostrarDetalle() {
		console.log(this.id, this.descripcion, this.fecha);
	}
}


class AccionInicioSesion extends Accion {
	dispositivo_origen: string;
	constructor(
		id: number,
		descripcion: string,
		fecha: Date,
		dispositivo_origen: string
	)	{
		super(id, descripcion, fecha);
		this.dispositivo_origen = dispositivo_origen;
	}

	mostrarDetalle(): void {
		super.mostrarDetalle();
		console.log("Dispositivo:", this.dispositivo_origen);
	}
}


class AccionCierreSesion extends Accion {
	dispositivo_origen: string;
	tiempo_de_sesion: number;
	constructor(
		id: number,
		description: string,
		fecha: Date,
		dispositivo_origen: string,
		tiempo_de_sesion: number
	) {
		super(id, description, fecha);
		this.dispositivo_origen = dispositivo_origen;
		this.tiempo_de_sesion = tiempo_de_sesion;
	}

	mostrarDetalle(): void {
		super.mostrarDetalle();
		console.log("Dispositivo:", this.dispositivo_origen);
		console.log("Tiempo de sesión:", this.tiempo_de_sesion, "minutos");
	}
}

class AccionActualizacionPerfil extends Accion {
	cambios: Cambio[];
	constructor(
		id: number,
		description: string,
		fecha: Date,
		cambios: Cambio[]
	){
		super(id, description, fecha);
		this.cambios = cambios;
	}
	mostrarDetalle(): void {
		super.mostrarDetalle();
		console.log("Cambios:");
		this.cambios.forEach(cambio => cambio.mostrarCambio());
	}
}

class Cambio {	
	id_cambio: number;
	valor_anterior: string;
	nuevo_valor: string;

	constructor(
		id_cambio: number,
		valor_anterior: string,
		nuevo_valor: string
	) {
		this.id_cambio = id_cambio;
		this.valor_anterior = valor_anterior;
		this.nuevo_valor = nuevo_valor;
	}

	mostrarCambio(): void {
		console.log("Cambio número", this.id_cambio);
		console.log("Valor anterior:", this.valor_anterior);
		console.log("Nuevo valor:", this.nuevo_valor);
	}
}

class AccionCompra extends Accion {
	productos: string[];
	total: number;
	constructor(
		id: number,
		description: string,
		fecha: Date,
		productos: string[],
		total: number,
		) {
		super(id, description, fecha);
		this.productos = productos;
		this.total = total;
	}	
	mostrarDetalle(): void {
		super.mostrarDetalle();
		console.log("Productos comprados:", this.productos);
		console.log("Total:", this.total);
	}
}

class AccionEnvioMensaje extends Accion {
	destinatario: string;
	mensaje: string;
	constructor(
		id: number,
		description: string,
		fecha: Date,
		destinatario: string,
		mensaje: string
	) {
		super(id, description, fecha);
		this.destinatario = destinatario;
		this.mensaje = mensaje;
	}
	mostrarDetalle(): void {
		super.mostrarDetalle();
		console.log("Destinatario:", this.destinatario);
		console.log("Mensaje:", this.mensaje);
	}	
}

class Historial {
	acciones: Accion[];
	constructor() {
		this.acciones = [];
	}
	agregarAccion(accion: Accion) {
		this.acciones.push(accion);
	}
	eliminarAccionPorID(id: number) {
		this.acciones = this.acciones.filter(accion => accion.id !== id);
	}
	eliminarTodo() {
		this.acciones = [];
	}
	mostrarHistorial() {
		console.log("Historial:");
		this.acciones.forEach(accion => accion.mostrarDetalle());
	}
}

const historial = new Historial();
	
	historial.agregarAccion(new AccionInicioSesion(1, "Inicio de sesión", new Date(), "PC"));				
	historial.agregarAccion(new AccionActualizacionPerfil(2, "Actualización de perfil", new Date(), [new Cambio(1, "correo@viejo.com", "correo@nuevo.com")]));
	historial.agregarAccion(new AccionCierreSesion(3, "Cierre de sesión", new Date(), "PC de Escritorio", 30));
	historial.agregarAccion(new AccionCompra(4, "Compra", new Date(), ["Laptop", "Ratón"], 1500));				
	historial.agregarAccion(new AccionEnvioMensaje(5, "Envio de mensaje", new Date(), "admin@example.com", "Hola, necesito ayuda con mi cuenta."));	
	
	historial.mostrarHistorial();

