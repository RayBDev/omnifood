import React, { Component } from 'react';
import axios from 'axios';
import {Gmaps, Marker} from 'react-gmaps';

import './Contact.css';
import Input from './Input/Input';


//Google Maps Settings
let coords = {}

if ( window.innerWidth > 1080 ) {
    coords = {
        showLat: 51.5258541,
        showLng: 0.05,
        markerLat: 51.5258541,
        markerLng: -0.08040660000006028
    };
} else if (window.innerWidth >= 900 && window.innerWidth <= 1080) {
    coords = {
        showLat: 51.5258541,
        showLng: 0.01,
        markerLat: 51.5258541,
        markerLng: -0.08040660000006028
    };
} else if ( window.innerWidth <= 480 ) {
    coords = {
        showLat: 51.5258541,
        showLng: -0.08040660000006028,
        markerLat: 51.5258541,
        markerLng: -0.08040660000006028
    };
} else {
    coords = {
        showLat: 51.5258541,
        showLng: -0.08040660000006028,
        markerLat: 51.5258541,
        markerLng: -0.08040660000006028
    };
}

const params = {v: '3.exp', key: 'AIzaSyAXr_phe5FXzypBaSzQmmaF53hMXsayDs8'};

class Contact extends Component{
    state = {
        contactForm: {
            name: {
                inputType: 'input',
                label: 'Name',
                type: 'text',
                name: 'name',
                id: 'name',
                value: '',
                placeholder: 'Your Name',
                required: true,
                validation: {
                    required: true
                },
                isValid: false,
                invalidMessage:'Please enter your name',
                touched: false
            },
            email: {
                inputType: 'input',
                label: 'Email',
                type: 'email',
                name: 'email',
                id: 'email',
                value: '',
                placeholder: 'Your Email',
                required: true,
                validation: {
                    required: true,
                    isEmail: true
                },
                isValid: false,
                invalidMessage:'Please enter a proper email address',
                touched: false
            },
            findUs: {
                inputType: 'select',
                label: 'How did you find us?',
                name: 'find-us',
                id: 'find-us',
                value: 'friends',
                options: {
                    option1: {
                        value: 'friends',
                        description:'Friends',
                    },
                    option2: {
                        value: 'search-engine',
                        description:'Search Engine',
                    },
                    option3: {
                        value: 'ad',
                        description:'Advertisement',
                    },
                    option4: {
                        value: 'other',
                        description:'Other',
                    }
                },
                validation: {
                    required: false,
                },
                isValid: true
            },
            newsletter: {
                inputType: 'input',
                label: 'Newsletter?',
                type: 'checkbox',
                name: 'newsletter',
                textAfter: 'Yes, please',
                value: true,
                validation: {
                    required: false,
                },
                isValid: true
            },
            message: {
                inputType: 'textarea',
                label: 'Drop us a line',
                name: 'message',
                id: 'message',
                value: '',
                required: true,
                placeholder: 'Your Message',
                validation: {
                    required: true
                },
                isValid: false,
                invalidMessage:'Please enter your message',
                touched: false
            },
            submit: {
                inputType: 'input',
                type:'submit',
                label: '\u00A0',
                value: 'Send it!',
                validation: {
                    required: false,
                },
                isValid: true,
                invalidMessage:'Please complete the form',
                touched: false,
                spinner: false
            }
        },
        formIsValid: false,
        formSubmitted: false,
        formSubmissionError: false
    }

    //Check if form fields are valid
    checkValidity (value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    inputChangeHandler = (event, element) => {
        //Update copy of state with the entered value
        const updatedContactForm = {
            ...this.state.contactForm
        };
        const updatedFormElement= {
            ...updatedContactForm[element]
        }
        
        if(element === 'newsletter') {
            updatedFormElement.value = !updatedFormElement.value;
        } else {
            updatedFormElement.value = event.target.value;
        }

        //Update copy of state to say the element has been touched
        updatedFormElement.touched = true;

        //Check and update copy of state with the validity of the entered value
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        //Update copy of state with all new data
        updatedContactForm[element] = updatedFormElement;

        //Check if the overall form is valid
        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm){
            formIsValid = updatedContactForm[inputIdentifier].isValid && formIsValid;
        }

        //Set state immutably     
        this.setState({contactForm: updatedContactForm, formIsValid: formIsValid});
    }

    submitBtnHandler = (event) => {
        event.preventDefault();
        if(this.state.formIsValid) {
            const updatedContactForm = {
                ...this.state.contactForm
            };
            
            updatedContactForm.submit.spinner = true;

            this.setState({
                contactForm: updatedContactForm,
                formSubmitted: true
            });

            const url = 'https://omnifood-3b81b.firebaseio.com/contacts.json';

            const formData = {
                name: this.state.contactForm.name.value,
                email: this.state.contactForm.email.value,
                findUs: this.state.contactForm.findUs.value,
                newsletter: this.state.contactForm.newsletter.value,
                message: this.state.contactForm.message.value
            }

            axios.post(url, formData)
                .then(res => {
                    updatedContactForm.submit.spinner = false;
                    this.setState({
                        contactForm: updatedContactForm
                    });
                })
                .catch(error => {
                    updatedContactForm.submit.spinner = false;
                    this.setState({
                        contactForm: updatedContactForm,
                        formSubmissionError: true
                    });
                });
        } else {
            const updatedContactForm = {
                ...this.state.contactForm
            };
            updatedContactForm.submit.touched = true;
            this.setState({
                contactForm: updatedContactForm
            });
        }
        
    }

    //Failed form submission button handler
    tryAgainBtnHandler = () => {
        this.setState({
            formSubmitted: false,
            formSubmissionError: false
        });
    }

    //Google Maps Methods
    onMapCreated(map) {
        map.setOptions({
          disableDefaultUI: true
        });
    }

    onDragEnd(e) {
        console.log('onDragEnd', e);
    }


    render() {
        //Create dynamic input fields
        let inputList = [];
        for(let element in this.state.contactForm){
            inputList.push((
                <Input 
                    key={element}
                    inputType={this.state.contactForm[element].inputType} 
                    type={this.state.contactForm[element].type} 
                    name={this.state.contactForm[element].name} 
                    id={this.state.contactForm[element].id} 
                    placeholder={this.state.contactForm[element].placeholder} 
                    required={this.state.contactForm[element].required} 
                    label={this.state.contactForm[element].label} 
                    options={this.state.contactForm[element].options} 
                    textAfter={this.state.contactForm[element].textAfter} 
                    value={this.state.contactForm[element].value} 
                    changed={(event) => this.inputChangeHandler(event, element)} 
                    clicked={(event) => this.submitBtnHandler(event)}
                    checked={this.state.contactForm[element].value}
                    formIsValid={this.state.formIsValid} 
                    valueIsValid = {this.state.contactForm[element].isValid} 
                    invalidMessage={this.state.contactForm[element].invalidMessage} 
                    touched={this.state.contactForm[element].touched} 
                />
            ));
        }

        //Generate form content based on the submission state
        let form = null;
        if(!this.state.formSubmitted){
            form = 
                <form className="contact-form">
                    {inputList}
                </form>;
        } else if(this.state.formSubmitted && this.state.contactForm.submit.spinner === true) {
            form = <div className="loader">Loading...</div>;
        } else if(!this.state.formSubmissionError && this.state.contactForm.submit.spinner === false) {
            form = <div className="form-submission-message"><ion-icon name="checkmark" class="icon-small"></ion-icon>Thank you for contacting us. We'll get back to you as soon as possible.</div>;
        } else {
            form = 
                <div className="form-submission-message">
                    <div className="form-submission-message"><ion-icon name="close" class="icon-small-fail"></ion-icon>Something went wrong with your form submission.</div>
                    <button className="form-submission-message btn btn-full" onClick={this.tryAgainBtnHandler}>&#8701; Try Again</button>
                </div>; 
        }

        return(
            <section className="section-form">
                <div className="map-box">
                    <Gmaps
                        width={'inherit'}
                        height={'inherit'}
                        lat={coords.showLat}
                        lng={coords.showLng}
                        zoom={12}
                        loadingMessage={'Loading Map'}
                        params={params}
                        onMapCreated={this.onMapCreated}>
                        <Marker
                        lat={coords.markerLat}
                        lng={coords.markerLng}
                        draggable={true}
                        onDragEnd={this.onDragEnd} />
                    </Gmaps>
                </div>
                <div className="form-box">
                    <div className="row">
                        <h2>We're happy to hear from you</h2>
                    </div>
                    <div className="row">
                        {form}
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;