import React from "react";

function EditPrice() {

    return (
        <form className="edit-message" >
          <input
            type="text"
            name="price"
            autoComplete="off"
          />
          <input type="submit" value="Save" />
        </form>
      );

}

export default EditPrice;