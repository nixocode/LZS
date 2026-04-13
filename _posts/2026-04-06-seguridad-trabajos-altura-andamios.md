---
layout: post
title: "Seguridad en trabajos en altura y andamios: normativa, estadísticas y buenas prácticas"
date: 2026-04-06
author: "La Zona Segura"
description: "Las caídas en altura siguen siendo la primera causa de muerte en el sector de la construcción en España. Análisis de la normativa, estadísticas y medidas de protección."
image: /assets/images/trabajos-altura.png
---

Las **caídas en altura** constituyen la primera causa de accidente mortal en el sector de la construcción en España, representando más del 30 % de los fallecimientos laborales. A pesar de décadas de regulación y formación, los datos muestran que este riesgo sigue siendo el gran reto de la prevención en obra.

## Marco normativo en España

La prevención de caídas en altura en obras de construcción se rige por un conjunto normativo que todo técnico de prevención debe conocer:

- **Ley 31/1995** de Prevención de Riesgos Laborales — Marco general.
- **RD 1627/1997** — Disposiciones mínimas de seguridad y salud en obras de construcción.
- **RD 2177/2004** — Disposiciones mínimas para la utilización de equipos de trabajo en trabajos temporales en altura.
- **RD 1215/1997** — Disposiciones mínimas sobre utilización de equipos de trabajo.
- **Norma UNE-EN 12810/12811** — Andamios de fachada y componentes.
- **Norma UNE-EN 361/362/363** — Equipos de protección individual contra caídas.

> **Dato clave:** El RD 2177/2004 establece que los trabajos en altura solo pueden realizarse desde equipos de trabajo adecuados (andamios, plataformas elevadoras) y que las protecciones colectivas siempre tienen prioridad sobre las individuales.

## Causas principales de las caídas en altura

Según datos del Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), las principales causas de caídas en altura en obras de construcción son:

<div class="chart-container" style="position: relative; max-width: 500px; margin: 2rem auto;">
  <canvas id="chart-causas-caidas"></canvas>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('chart-causas-caidas');
  if (ctx) {
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Ausencia protección colectiva', 'No uso de arnés', 'Andamio defectuoso', 'Rotura/fallo de material', 'Falta de formación', 'Condiciones meteorológicas', 'Otros'],
        datasets: [{
          data: [28, 22, 18, 12, 10, 6, 4],
          backgroundColor: ['#dc2626', '#f97316', '#f59e0b', '#84cc16', '#06b6d4', '#8b5cf6', '#94a3b8'],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 11 }, padding: 16, usePointStyle: true } },
          title: { display: true, text: 'Causas de caídas en altura en construcción (%)', font: { family: 'Inter', size: 15, weight: '600' }, color: '#1e293b', padding: { bottom: 16 } }
        }
      }
    });
  }
});
</script>

**Análisis:** La **ausencia de protección colectiva** (28 %) y el **no uso de arnés** (22 %) suman el 50 % de las causas. Ambas son prevenibles con supervisión adecuada y una cultura de seguridad sólida.

## Evolución de accidentes por caída en altura

La tendencia de accidentes mortales por caída en altura en el sector de la construcción en España (datos INSST) muestra una evolución preocupante:

<div class="chart-container" style="position: relative; max-width: 650px; margin: 2rem auto;">
  <canvas id="chart-tendencia-caidas"></canvas>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('chart-tendencia-caidas');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: 'Accidentes mortales por caída en altura',
          data: [47, 42, 31, 38, 44, 41, 36, 33],
          borderColor: '#dc2626',
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          borderWidth: 2.5,
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#dc2626',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5
        }, {
          label: 'Accidentes graves por caída en altura',
          data: [312, 298, 215, 267, 289, 275, 248, 231],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.08)',
          borderWidth: 2,
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#f59e0b',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4,
          yAxisID: 'y1'
        }]
      },
      options: {
        responsive: true,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 12 }, padding: 20, usePointStyle: true } },
          title: { display: true, text: 'Evolución de accidentes por caída en altura (construcción, España)', font: { family: 'Inter', size: 14, weight: '600' }, color: '#1e293b', padding: { bottom: 16 } }
        },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Mortales', font: { family: 'Inter', size: 11 } }, grid: { color: 'rgba(0,0,0,0.06)' } },
          y1: { beginAtZero: true, position: 'right', title: { display: true, text: 'Graves', font: { family: 'Inter', size: 11 } }, grid: { display: false } },
          x: { grid: { display: false }, ticks: { font: { family: 'Inter' } } }
        }
      }
    });
  }
});
</script>

La bajada en 2020 se explica por la reducción de actividad durante la pandemia. La tendencia post-pandemia muestra una **recuperación de las cifras pre-COVID**, aunque con una ligera tendencia descendente en 2024-2025 que debe consolidarse.

## Protecciones colectivas obligatorias

Las protecciones colectivas son la primera línea de defensa contra las caídas. Según la normativa y las buenas prácticas del sector:

### Barandillas de seguridad

- **Altura mínima:** 1 metro (pasamanos superior).
- **Listón intermedio:** a media altura (≈ 0,5 m).
- **Rodapié:** mínimo 15 cm para evitar caída de objetos.
- **Resistencia:** capaz de soportar una fuerza de 150 kg/m.

### Redes de seguridad

| Tipo | Uso | Norma |
|---|---|---|
| Tipo S | Bajo forjado (horizontal) | UNE-EN 1263-1 |
| Tipo T | En borde de forjado (en horca) | UNE-EN 1263-1 |
| Tipo U | Vertical, en fachada | UNE-EN 1263-1 |
| Tipo V | En borde, con soporte tipo horca | UNE-EN 1263-1 |

### Marquesinas de protección

Obligatorias en las entradas y salidas del edificio en construcción para proteger frente a caída de objetos.

## Protecciones individuales: arnés y sistemas anticaídas

Cuando las protecciones colectivas no son técnicamente posibles, se recurre a los **sistemas anticaídas**:

### Componentes del sistema

1. **Arnés anticaídas** (UNE-EN 361) — Con enganche dorsal obligatorio.
2. **Dispositivo de anclaje** (UNE-EN 795) — Punto al que se conecta el sistema.
3. **Conector** — Elemento de unión: absorbedor de energía + cuerda/cable retráctil (UNE-EN 355/360).

### Requisitos de anclaje

- **Resistencia mínima:** 10 kN (≈ 1.000 kg).
- **Posición:** Siempre por **encima** de la cabeza del trabajador.
- **Factor de caída:** Debe ser siempre ≤ 1. Nunca anclar por debajo de la cintura.

> **Error frecuente:** Utilizar el arnés anclado a un punto que no resiste la carga de impacto. Un trabajador de 80 kg en una caída libre de 2 metros genera una fuerza de impacto de hasta **6 kN**. Si el punto de anclaje cede, el arnés no sirve de nada.

## Inspección de andamios: lista de verificación

Antes de autorizar el uso de un andamio, debe verificarse:

| Punto de inspección | ¿Correcto? |
|---|---|
| Plan de montaje disponible y firmado | ☐ |
| Montado por personal cualificado con formación específica | ☐ |
| Bases regulables sobre superficie firme (no sobre ladrillos/tablones) | ☐ |
| Arriostrado al edificio según el plan | ☐ |
| Plataformas completas (sin huecos > 25 mm) | ☐ |
| Barandillas en todos los frentes abiertos | ☐ |
| Rodapiés instalados | ☐ |
| Escaleras de acceso interiores en buen estado | ☐ |
| Distancia máxima al paramento: 30 cm | ☐ |
| Tarjeta de inspección visible (verde = autorizado) | ☐ |

---

La prevención de caídas en altura no admite atajos. Cada euro invertido en protecciones colectivas, formación y supervisión es un euro invertido en **salvar vidas**. Los datos son claros: cuando se aplican las medidas con rigor, las caídas en altura se pueden prevenir. La pregunta no es si podemos permitirnos invertir en seguridad, sino si podemos permitirnos no hacerlo.
