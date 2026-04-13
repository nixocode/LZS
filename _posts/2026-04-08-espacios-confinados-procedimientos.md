---
layout: post
title: "Trabajos en espacios confinados: procedimientos, mediciones y equipos de rescate"
date: 2026-04-08
author: "La Zona Segura"
description: "Los espacios confinados son uno de los entornos de trabajo más peligrosos en la industria. Protocolo completo de entrada, mediciones atmosféricas y planes de rescate."
image: /assets/images/espacios-confinados.png
---

Los **espacios confinados** representan uno de los riesgos más letales en la industria de la construcción y el sector industrial. La estadística es contundente: el factor de letalidad en accidentes en espacios confinados es **tres veces superior** al de otros tipos de accidentes laborales. Y lo que es más dramático: en un porcentaje significativo de los casos, las víctimas son rescatadores que entraron sin las medidas adecuadas.

## ¿Qué es un espacio confinado?

Según la normativa española y el INSST, un espacio confinado es un recinto que cumple **todas** estas características:

1. **Abertura limitada** de entrada y salida.
2. **Ventilación natural desfavorable** — La renovación del aire es insuficiente.
3. **No está diseñado para ocupación continua** por trabajadores.

### Ejemplos típicos en construcción e industria

- Pozos y arquetas de saneamiento
- Tanques de almacenamiento (combustibles, químicos, agua)
- Silos de materiales a granel
- Galerías de servicio y colectores
- Interior de calderas y recipientes a presión
- Zanjas profundas (> 1,2 m de profundidad)
- Interior de pilas de puentes huecas
- Cámaras de válvulas en plantas industriales

## Tipos de incidentes en espacios confinados

Los datos acumulados de investigación de accidentes en espacios confinados en el sector industrial español muestran la siguiente distribución de causas:

<div class="chart-container" style="position: relative; max-width: 650px; margin: 2rem auto;">
  <canvas id="chart-incidentes-ec"></canvas>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('chart-incidentes-ec');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Atmósfera\ntóxica', 'Deficiencia\nde oxígeno', 'Atmósfera\nexplosiva', 'Atrapamiento\nmecánico', 'Ahogamiento/\ninundación', 'Caída\nal interior', 'Estrés\ntérmico'],
        datasets: [{
          label: '% de incidentes',
          data: [31, 24, 16, 11, 8, 7, 3],
          backgroundColor: [
            'rgba(220, 38, 38, 0.85)',
            'rgba(249, 115, 22, 0.85)',
            'rgba(245, 158, 11, 0.85)',
            'rgba(132, 204, 22, 0.85)',
            'rgba(6, 182, 212, 0.85)',
            'rgba(139, 92, 246, 0.85)',
            'rgba(148, 163, 184, 0.85)'
          ],
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Distribución de incidentes en espacios confinados (%)', font: { family: 'Inter', size: 15, weight: '600' }, color: '#1e293b', padding: { bottom: 16 } }
        },
        scales: {
          x: { beginAtZero: true, max: 35, title: { display: true, text: '% del total de incidentes', font: { family: 'Inter', size: 12 } }, grid: { color: 'rgba(0,0,0,0.06)' } },
          y: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 11 } } }
        }
      }
    });
  }
});
</script>

> **Dato crítico:** Las **atmósferas tóxicas** (31 %) y la **deficiencia de oxígeno** (24 %) representan más de la mitad de los accidentes. En ambos casos, el riesgo es invisible: no se puede ver, oler ni percibir hasta que los efectos son irreversibles.

## Mediciones atmosféricas: los 4 parámetros obligatorios

Antes de entrar en un espacio confinado, es **obligatorio** realizar mediciones atmosféricas con un detector multigás. Los parámetros a verificar son:

| Parámetro | Rango seguro | Acción si fuera de rango |
|---|---|---|
| **Oxígeno (O₂)** | 19,5 % – 23,5 % | < 19,5 %: NO ENTRAR. Ventilar o usar ERA |
| **Monóxido de carbono (CO)** | < 25 ppm | > 25 ppm: NO ENTRAR. Ventilar |
| **Ácido sulfhídrico (H₂S)** | < 10 ppm | > 10 ppm: NO ENTRAR. Ventilar |
| **Límite inferior de explosividad (LIE)** | < 10 % del LIE | > 10 %: NO ENTRAR. Eliminar fuente |

### Protocolo de mediciones

1. **Medición PREVIA** — Desde el exterior, con sonda extensible, sin entrar.
2. **Mediciones a tres niveles** — Suelo, medio y techo. Los gases pesados (H₂S) se acumulan abajo; los ligeros (metano) arriba.
3. **Medición CONTINUA** — El detector debe permanecer encendido durante toda la estancia.
4. **Registro** — Documentar todas las mediciones en el permiso de trabajo.

## El permiso de trabajo para espacios confinados

Ninguna persona puede entrar en un espacio confinado sin un **permiso de trabajo** firmado que incluya:

### Contenido del permiso

- **Identificación del espacio** — Ubicación, tipo, contenido previo.
- **Evaluación de riesgos específica** — Actualizada para la tarea concreta.
- **Resultado de las mediciones atmosféricas** — Con hora y firma del técnico.
- **Medidas de control** — Ventilación, consignación de equipos, iluminación ATEX.
- **Equipo de trabajo** — Mínimo 3 personas: operador, vigía y jefe de entrada.
- **Plan de rescate** — Procedimiento, equipos y personal formado disponible.
- **Comunicaciones** — Sistema de comunicación entre interior y exterior.
- **Duración máxima** — Tiempo máximo de permanencia autorizado.
- **Firmas** — Del responsable del trabajo, del técnico de prevención y del vigía.

> **Regla de oro:** El permiso de trabajo tiene una **validez limitada** (normalmente el turno de trabajo). Cada nuevo turno requiere un nuevo permiso con nuevas mediciones.

## Roles obligatorios

### El vigía (attendant)

Es la persona encargada de la **vigilancia exterior** del espacio confinado. Sus responsabilidades:

- Permanecer en la entrada en todo momento (nunca entrar).
- Mantener el recuento de personas en el interior.
- Mantener comunicación continua con los operadores.
- Activar el plan de rescate si detecta cualquier anomalía.
- Impedir la entrada de personal no autorizado.
- NO puede tener ninguna otra tarea asignada.

### El jefe de entrada (entry supervisor)

- Verifica que el permiso de trabajo está correctamente cumplimentado.
- Autoriza la entrada tras confirmar que todas las medidas de control están implantadas.
- Puede suspender los trabajos en cualquier momento.

## Ventilación forzada

Cuando las mediciones muestran una atmósfera desfavorable pero corregible, se utiliza ventilación forzada:

| Tipo | Uso | Consideraciones |
|---|---|---|
| **Impulsión** | Introducir aire limpio al interior | Preferible en la mayoría de casos |
| **Extracción** | Eliminar contaminantes del interior | Necesaria con gases específicos |
| **Combinada** | Impulsión + extracción simultánea | Para espacios grandes o muy contaminados |

**Caudal mínimo recomendado:** 20 renovaciones de aire por hora. Para un espacio de 10 m³, esto equivale a 200 m³/h de caudal.

## Equipo de rescate

El plan de rescate debe estar **preparado antes** de que nadie entre. Nunca improvisado durante una emergencia:

### Equipamiento mínimo de rescate

- **Trípode** con sistema de izado/descenso.
- **Arneses de rescate** con enganche esternal para izado vertical.
- **Equipo de Respiración Autónomo (ERA)** — Mínimo 2 equipos para los rescatadores.
- **Camilla de rescate vertical** (tipo SKED) para espacios estrechos.
- **Detector multigás** adicional para los rescatadores.
- **Material de primeros auxilios** y oxigenoterapia.
- **Sistema de comunicación** backup.

### Simulacros

Los equipos de rescate deben realizar **simulacros específicos** al menos cada 6 meses. El simulacro debe reproducir las condiciones reales del espacio confinado de la obra.

---

Los espacios confinados son entornos de trabajo donde **no hay margen para el error**. Un fallo en las mediciones, un permiso incompleto o un rescate improvisado pueden convertir un trabajo rutinario en una tragedia. La inversión en formación, equipos y procedimientos no es negociable: es la diferencia entre la vida y la muerte.
