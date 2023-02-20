export const Categories = () => {
  return (
  <section className="section">
      <div className = "section__container">
        <form className="form__categories">
          <h1 className="form__title">Categorías de rubros</h1>

          <input type="checkbox" id="form__chckbx__herramientas"> </input>
          <label className="form__label" for="form_chckbx__herramientas">Herramientas</label>

          <input type="checkbox" id="form__chckbx__construccion"> </input>
          <label className="form__label" for="form_chckbx__construccion">Construcción</label>

          <input type="checkbox" id="form__chckbx__hogar"> </input>
          <label className="form__label" for="form_chckbx__hogar">Hogar</label>

          <input type="checkbox" id="form__chckbx__jardin"> </input>
          <label className="form__label" for="form__chckbx__jardin">Jardín</label>        

          <div className="col text-center">
            <input type="submit" id="form__btn__submit" value="Seleccionar"></input>
          </div>        
        </form>      
      </div> 
    </section>   
  );
};
