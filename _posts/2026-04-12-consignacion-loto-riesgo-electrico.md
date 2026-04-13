---
layout: post
title: "Consignación LOTO y riesgo eléctrico: las 5 reglas de oro y procedimientos de bloqueo"
date: 2026-04-12
author: "La Zona Segura"
description: "El riesgo eléctrico causa accidentes con una tasa de mortalidad superior a la media. Procedimiento LOTO, las 5 reglas de oro y equipos de protección dieléctrica."
image: /assets/images/loto-electrico.png
---

El **riesgo eléctrico** en obras de construcción e instalaciones industriales tiene una característica que lo distingue de otros riesgos: su **tasa de mortalidad** es desproporcionadamente alta. Mientras que la media de accidentes laborales resulta en fallecimiento en un 0,3 % de los casos, en accidentes eléctricos esta cifra sube al **3-5 %**. Dicho de otro modo: el contacto eléctrico es 10 veces más letal que la media.

## Tipos de riesgo eléctrico

### Contacto directo
Contacto con un elemento que está **normalmente en tensión**: cables, bornes, barras conductoras. Suele deberse a la ausencia de protección o al incumplimiento de distancias de seguridad.

### Contacto indirecto
Contacto con un elemento que **no debería estar en tensión** pero lo está por un defecto de aislamiento: carcasa de una máquina, estructura metálica, armadura de un cable. La protección principal es el interruptor diferencial y la puesta a tierra.

### Arco eléctrico
La descarga de un arco eléctrico puede alcanzar temperaturas de **19.000 °C** y producir quemaduras graves, ceguera y onda expansiva incluso sin contacto directo.

## Tipos de energía peligrosa en entornos industriales

El procedimiento LOTO no se aplica solo a la electricidad. En un entorno industrial, las fuentes de energía que pueden causar daño son diversas:

<div class="chart-container" style="position: relative; max-width: 500px; margin: 2rem auto;">
  <canvas id="chart-tipos-energia"></canvas>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('chart-tipos-energia');
  if (ctx) {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Eléctrica', 'Mecánica', 'Hidráulica', 'Neumática', 'Térmica', 'Química', 'Gravitacional'],
        datasets: [{
          data: [34, 20, 15, 11, 9, 6, 5],
          backgroundColor: [
            '#f59e0b',
            '#3b82f6',
            '#06b6d4',
            '#8b5cf6',
            '#ef4444',
            '#22c55e',
            '#6b7280'
          ],
          borderColor: '#ffffff',
          borderWidth: 3,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        cutout: '55%',
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 }, padding: 16, usePointStyle: true, pointStyleWidth: 12 } },
          title: { display: true, text: 'Incidentes LOTO por tipo de energía (%)', font: { family: 'Inter', size: 15, weight: '600' }, color: '#1e293b', padding: { bottom: 20 } }
        }
      }
    });
  }
});
</script>

La **energía eléctrica** es la causa del 34 % de los incidentes por fallo de consignación, seguida de la **energía mecánica** (20 %) — piezas en movimiento que no se detuvieron correctamente — y la **hidráulica** (15 %) — presión residual en circuitos.

## Las 5 Reglas de Oro del trabajo sin tensión

Las **5 reglas de oro** son el procedimiento fundamental para trabajar en instalaciones eléctricas sin riesgo. No admiten excepciones y deben aplicarse **siempre** en el orden establecido:

### 1. Desconexión
Abrir con corte visible todos los dispositivos de corte que alimentan la instalación. **Corte visible** significa verificación visual de que los contactos están abiertos.

### 2. Bloqueo y señalización
Bloquear los dispositivos de corte en posición abierta con **candado personal** (LOTO). Colocar señalización: *"Prohibido maniobrar — Trabajos en curso"*.

### 3. Verificación de ausencia de tensión
Comprobar la ausencia de tensión en **cada una de las fases** y en el neutro con un verificador de tensión (VAT) adecuado al nivel de tensión.

> **Error mortal frecuente:** Dar por hecho que no hay tensión porque se ha abierto el seccionador. La verificación con VAT es **obligatoria** siempre. Un seccionador puede fallar, puede haber una retroalimentación, o se puede haber accionado el equivocado.

### 4. Puesta a tierra y en cortocircuito
En instalaciones de alta tensión (> 1.000 V), conectar a tierra las fases **donde se va a trabajar**. Si la tensión se restablece accidentalmente, el cortocircuito dispara las protecciones en lugar de electrocutar al trabajador.

### 5. Señalización de la zona de trabajo
Delimitar la zona de trabajo y señalizarla para evitar que otros trabajadores entren en la zona de riesgo.

## Procedimiento LOTO (Lockout/Tagout)

El procedimiento LOTO es la aplicación práctica de las reglas de seguridad para la **consignación** (bloqueo de energías peligrosas) durante trabajos de mantenimiento o reparación.

### Componentes del sistema LOTO

| Componente | Función | Requisitos |
|---|---|---|
| **Candado de bloqueo** | Impide la reactivación del equipo | Personal, intransferible, con llave única |
| **Pinza multibloqueo** | Permite que varios trabajadores bloqueen el mismo punto | Tantos candados como personas trabajando |
| **Etiqueta de consignación** | Identifica quién bloqueó, cuándo y por qué | Nombre, fecha, motivo, firma |
| **Dispositivos de bloqueo** | Adaptadores para válvulas, interruptores, enchufes | Específicos para cada tipo de equipo |

### Secuencia del procedimiento

1. **Preparación** — Identificar todas las fuentes de energía del equipo. Revisar el esquema de la instalación.
2. **Notificación** — Informar a todos los afectados de que el equipo va a ser consignado.
3. **Parada del equipo** — Detener la máquina/instalación siguiendo el procedimiento normal.
4. **Aislamiento** — Desconectar/cerrar todas las fuentes de energía.
5. **Bloqueo** — Colocar candados LOTO en cada punto de aislamiento.
6. **Disipación de energía residual** — Purgar presión, descargar condensadores, bloquear pesos suspendidos.
7. **Verificación** — Intentar arrancar el equipo (sin éxito) para confirmar el aislamiento.
8. **Trabajo** — Realizar las tareas de mantenimiento/reparación.
9. **Retirada del bloqueo** — Solo por la persona que lo instaló, tras verificar que la zona de trabajo está despejada.
10. **Reactivación** — Notificar y reiniciar según procedimiento.

> **Principio inviolable:** Cada persona que trabaja en el equipo coloca **su propio candado**. Un candado nunca puede ser retirado por otra persona que no sea su propietario. Si el propietario no está disponible, solo el responsable de la planta puede autorizar la retirada, tras verificar personalmente que no hay nadie en riesgo.

## Distancias de seguridad

Las distancias mínimas de seguridad para trabajos en proximidad de instalaciones eléctricas en tensión:

| Tensión nominal (kV) | Zona de peligro (DPEL) | Zona de proximidad (DPROX) |
|---|---|---|
| ≤ 1 (Baja tensión) | 0,3 m | 0,7 m |
| 3 | 0,6 m | 1,2 m |
| 6 | 0,6 m | 1,2 m |
| 20 | 0,8 m | 2,0 m |
| 66 | 1,2 m | 3,0 m |
| 132 | 1,8 m | 4,0 m |
| 220 | 2,5 m | 5,0 m |
| 400 | 3,5 m | 7,0 m |

### En obras de construcción

Las distancias a líneas eléctricas aéreas para maquinaria de obra (grúas, excavadoras, camiones con pluma):

- **Baja tensión (≤ 1 kV):** 3 metros mínimo.
- **Alta tensión (> 1 kV):** 5 metros mínimo como regla general (consultar tabla específica para tensiones superiores a 66 kV).

## EPI dieléctrico

Cuando no es posible trabajar sin tensión (trabajos en tensión), se requiere EPI específico:

| EPI | Norma | Clase |
|---|---|---|
| Guantes dieléctricos | UNE-EN 60903 | 00, 0, 1, 2, 3, 4 (según tensión) |
| Calzado dieléctrico | UNE-EN 50321 | Con suela aislante certificada |
| Casco con pantalla facial | UNE-EN 166 + UNE-EN 14458 | Contra arco eléctrico (clase 1 o 2) |
| Ropa ignífuga | UNE-EN 61482-2 | Clase 1 (4 kA) o clase 2 (7 kA) |
| Alfombra aislante | UNE-EN 61111 | Según tensión máxima de uso |
| Herramientas aisladas | UNE-EN 60900 | Hasta 1.000 V |

> **Verificación obligatoria:** Los guantes dieléctricos deben someterse a **ensayo dieléctrico** periódico (normalmente cada 6 meses). Un guante vencido o sin certificado **no protege**.

---

El riesgo eléctrico no perdona. La diferencia entre un trabajo seguro y una electrocución fatal está en el cumplimiento riguroso de las 5 reglas de oro y del procedimiento LOTO. No hay atajos, no hay excepciones, no hay "solo un momento". **Cada consignación correcta es una vida protegida.**
