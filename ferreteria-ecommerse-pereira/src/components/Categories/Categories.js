import './Categories.scss'

export const Categories = () => {
  return (
  <section className="section">
      <div className = "section__container">
        <h1 className="form__title">Categorías de rubros</h1>
        <hr/>

        <form className="form__categories">          
          <label className="form__label">
            <input type="checkbox" name="herramientas" />             
            Herramientas            
          </label>

          <label className="form__label">
            <input type="checkbox" name="electricidad" />             
            Electricidad            
          </label>          

          <label className="form__label">
            <input className="form__checkbox" type="checkbox" name="contruccion" />             
            Construcción            
          </label>

          <label className="form__label">
            <input type="checkbox" name="muebles" />             
            Muebles            
          </label>
          
          <input type="submit" value="Aplicar"></input>
          
        </form>      
      </div> 
    </section>   
  );
};
