import React, { Fragment, useEffect, useState } from 'react';
import Header from './component/Header';
import './App.css'
import Footer from './component/Footer';

const App = () => {
    useEffect(() => {
        const getAPI = async () => {
            const response = await fetch('http://localhost:8080/');
            const data = await response.json();

            try {
                console.log(data);
                setLoading(false);
                setArgo(data);
            } catch (error) {
                console.log(error);
            }
        };
        getAPI();
    }, []);

    const [argo, setArgo] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
      <Fragment>
          <Header />
          <main>
          
          <div>
            <h2>Ajouter un(e) Argonaute</h2>
            <form method="POST" action="http://localhost:8080/add-argo" className="new-member-form">
                  <div>
                      <label>Nom de l&apos;Argonaute</label>
                      <input type="text" id='name' name="name" placeholder="Charalampos" required />
                  </div>
                  

                  <div>
                      <button type="submit">Envoyer</button>
                  </div>
              </form>
          </div>

            <section className='member-list'>
            <div className="member-item">Eleftheria</div>
            <div className="member-item">Gennadios</div>
            <div className="member-item">Lysimachos</div>
            
            {loading ? (
                <div>Loading</div>
            ) : (
                <>
                    {argo.map((data) => (
                        <div key={data._id} className="member-item">
                            { data.name }
                        </div>
                    ))}
                </>
            )}
            
            </section>
            
          </main>
            
            <Footer />
        </Fragment>
    );
};

export default App;
