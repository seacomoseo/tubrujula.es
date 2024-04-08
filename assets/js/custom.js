// GADS

// CONTACT CLICK

document.addEventListener('click', e => {
  if (e.target.closest('.contact__email-option-send')) {
    gtag('event', 'conversion', {
      send_to: 'AW-16461723932/M_PlCOG5wqQZEJzyx6k9'
    })
  }

  if (e.target.closest('.callnow__whatsapp')) {
    gtag('event', 'conversion', {
      send_to: 'AW-16461723932/2XcXCOOvwqQZEJzyx6k9'
    })
  }

  if (e.target.closest('.contact__phone')) {
    gtag('event', 'conversion', {
      send_to: 'AW-16461723932/8MTJCP6qwaQZEJzyx6k9'
    })
  }

  if (e.target.closest('.contact__email-option-copy')) {
    gtag('event', 'conversion', {
      send_to: 'AW-16461723932/AGgHCNWvwKQZEJzyx6k9'
    })
  }
}, {
  capture: true
})

// FORM

// let x = 0
// let timer = setInterval(function() {
//   if (document.querySelectorAll('.contact__form-submit').length > 0) {
//     if (x === 0) {
//       gtag('event', 'conversion', {
//         send_to: 'AW-16461723932/uXeHCIHSwaQZEJzyx6k9'
//       })
//       x = 1
//     }
//     clearInterval(timer)
//   }
// }, 1000)

// When form is submit
document.addEventListener('submited_form_inicio_contacto', e => {
  gtag('event', 'conversion', {
    send_to: 'AW-16461723932/uXeHCIHSwaQZEJzyx6k9'
  })
})