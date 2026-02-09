jQuery('img[alt="OWC Aura Pro X2 SSD"]').closest('.product-family > .row').prev('.row').prev('.row').addClass('hrWrapper');
jQuery('img[alt="OWC Aura Pro X2 SSD"]').closest('.product-family > .row').next('.row').next('.row').next('.row').addClass('auraN2');
jQuery('.product-family').prepend(jQuery('.hrWrapper').closest('.product-family > .row').nextUntil(".row.auraN2"));