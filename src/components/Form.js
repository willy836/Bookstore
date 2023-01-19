import React from 'react';

const Form = () => (
  <div>
    <form>
      <h3>ADD NEW BOOK</h3>
      <div className="books">
        <div className="label-div">
          <input type="text" placeholder="Book title" />
        </div>
        <div className="label-div">
          <input type="text" placeholder="Book author" />
        </div>
        <div>
          <button type="button">ADD BOOK</button>
        </div>
      </div>
    </form>
  </div>
);

export default Form;
