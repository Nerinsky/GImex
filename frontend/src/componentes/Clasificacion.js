export default function Clasificacion(accesorios)
{
    const {clasificacion, visitas } = accesorios;
    return(
        <div className="clasificacion">
                <span>
                    <i 
                        className={ 
                            clasificacion >=1
                                ? 'fa fa-star'
                                : clasificacion >=0.5
                                ? 'fa fa-star-half-o'
                                : 'fa fa-star-o'
                        }
                    ></i>
                    </span>
                    <span>
                    <i 
                        className={ 
                            clasificacion >=2
                                ? 'fa fa-star'
                                : clasificacion >=1.5
                                ? 'fa fa-star-half-o'
                                : 'fa fa-star-o'
                        }
                    ></i>
                    </span>
                    <span>
                    <i 
                        className={ 
                            clasificacion >=3
                                ? 'fa fa-star'
                                : clasificacion >=2.5
                                ? 'fa fa-star-half-o'
                                : 'fa fa-star-o'
                        }
                    ></i>
                    </span>
                    <span>
                    <i 
                        className={ 
                            clasificacion >=4
                                ? 'fa fa-star'
                                : clasificacion >=3.5
                                ? 'fa fa-star-half-o'
                                : 'fa fa-star-o'
                        }
                    ></i>
                    </span>
                    <span>
                    <i 
                        className={ 
                            clasificacion >=5
                                ? 'fa fa-star'
                                : clasificacion >=4.5
                                ? 'fa fa-star-half-o'
                                : 'fa fa-star-o'
                        }
                    ></i>
                    </span>
                    <span>
                        { visitas + 'visitas'}
                    </span>
            </div>
    )
}