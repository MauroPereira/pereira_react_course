export const Categories = () => {
  return (
  <section className="section">
      <div className = "section__container">
        <h1 className="form__title">Categorías de rubros</h1>

        <form className="form__categories">          
          <label className="form__label">
            Herramientas
            <input type="checkbox" name="herramientas" />             
          </label>

          <label className="form__label">
            Electricidad
            <input type="checkbox" name="electricidad" />             
          </label>          

          <label className="form__label">
            Construcción
            <input type="checkbox" name="contruccion" />             
          </label>

          <label className="form__label">
            Muebles
            <input type="checkbox" name="muebles" />             
          </label>
          
          <input type="submit" value="Seleccionar"></input>
          
        </form>      
      </div> 
    </section>   
  );
};
