const productos = {
      "1": { nombre: "Galletitas", precio: 1500 },
      "2": { nombre: "Chocolate", precio: 2000 },
      "3": { nombre: "Alfajor", precio: 1800 },
      "4": { nombre: "Bebidas", precio: 2000 },
      "5": { nombre: "Snacks", precio: 3000 },

    };

    function comprar() {
      const inputProducto = document.getElementById("producto").value.trim().toLowerCase();
      const cantidad = parseInt(document.getElementById("cantidad").value);
      console.log("Producto elegido:", inputProducto);

      boton.addEventListener("click", function () {{
        console.log("Botón comprar clickeado");
      }});

      if (productos[inputProducto]) {
        const precioUnitario = productos[inputProducto].precio;
        const total = precioUnitario * cantidad;
        document.getElementById("resultado").textContent = `Precio total por ${cantidad} unidad(es) de ${productos[inputProducto].nombre}: $${total}`;
      } else {
        document.getElementById("resultado").textContent = "Producto no encontrado";
      }
    }
