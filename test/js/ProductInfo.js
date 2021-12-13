'use strict';

class ProductInfo {
   /**
    * 
    * @param {id}  Товара
    * @param {image}  изображение товара
    * @param {name}  наименование товара
    * @param {description}  описание товара
    * @param {price}  цена товара
    */
   constructor(id, image, name, description, price) {
      this.id = id;
      this.image = image;
      this.name = name;
      this.description = description;
      this.price = price;
   }
}
