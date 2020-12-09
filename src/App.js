import React from 'react';
import { connect } from 'react-redux'
import {category_all} from './redux'
import { Button, Form } from 'react-bootstrap';

function App(props) {
    return (
        <>
            <section className='my-4 row'>
                <div className='col-md-3'>
                    <div>
                        <h5>Category</h5>

                        <ul className='pl-0'>
                            {
                                props.category_list.map((item,key) => {
                                  return (
                                      <>
                                          <li id={key}>
                                              <Form.Group controlId={item.id}>
                                                <Form.Check id={item.id} type='checkbox' label={item.label}
                                                    checked={(item.value === true) ? true : false }
                                                  onChange={props.categoryFilter}
                                                />
                                              </Form.Group>
                                          </li>
                                      </>
                                  );
                              })
                            }
                        </ul>
                    </div>
                </div>
                <div className='col-md-9'>

                </div>
            </section>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        category_list : state.category_list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        categoryFilter : () => dispatch(category_all())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
