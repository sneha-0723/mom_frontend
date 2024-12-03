/*import React, { useState } from "react";
import axios from "axios";

function MeetingUploader() {
  const [file, setFile] = useState(null);
  const [meetingDetails, setMeetingDetails] = useState({
    meetingId: "",
    hostName: "",
    dateTime: "",
    duration: "",
    title: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails({
      ...meetingDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
   
    formData.append(
      "requestData",
      JSON.stringify({
        meetingId: meetingDetails.meetingId,
        hostName: meetingDetails.hostName,
        dateTime: meetingDetails.dateTime,
        duration: parseInt(meetingDetails.duration, 10),
        title: meetingDetails.title,
      })
    );

    try {
      const response = await axios.post(`http://localhost:8080/api/meetings/upload`, formData);
      console.log("Meeting record saved:", response.data);
      alert("Meeting record saved successfully!");
    } catch (error) {
      console.error("Error uploading meeting:", error);
      alert("Error uploading meeting!");
    }
  };

  // Define inline styles
  const styles = {
    container: {
      width: "400px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "8px",
      boxSizing: "border-box",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Upload Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Meeting ID:</label>
          <input
            type="text"
            name="meetingId"
            value={meetingDetails.meetingId}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Host Name:</label>
          <input
            type="text"
            name="hostName"
            value={meetingDetails.hostName}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Date & Time:</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={meetingDetails.dateTime}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            value={meetingDetails.duration}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            name="title"
            value={meetingDetails.title}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Transcript File:</label>
          <input type="file" onChange={handleFileChange} required style={styles.input} />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default MeetingUploader;*/
/*import React, { useState } from 'react';
import axios from 'axios';

const MeetingUploader = () => {
    const [formData, setFormData] = useState({
        meetingId: '',
        hostName: '',
        dateTime: '',
        duration: '',
        title: '',
    });

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/meetings/upload', {
                meetingId: formData.meetingId,
                hostName: formData.hostName,
                dateTime: formData.dateTime,
                duration: parseInt(formData.duration), // Convert duration to integer
                title: formData.title,
            });
            setResponse(res.data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Upload Meeting Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Meeting ID:</label>
                    <input
                        type="text"
                        name="meetingId"
                        value={formData.meetingId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Host Name:</label>
                    <input
                        type="text"
                        name="hostName"
                        value={formData.hostName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date and Time:</label>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Duration (minutes):</label>
                    <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    <h3>Meeting Uploaded Successfully!</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div>
                    <h3>Error Occurred</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default MeetingUploader;*/
/*import React, { useState } from 'react';
import axios from 'axios';

const MeetingUploader = () => {
    // State to hold form data and file
    const [formData, setFormData] = useState({
        meetingId: '',
        hostName: '',
        dateTime: '',
        duration: '',
        title: '',
    });

    const [file, setFile] = useState(null); // State to hold selected file
    const [response, setResponse] = useState(null); // Response from server
    const [error, setError] = useState(null); // Error state

    // Handle input changes for text fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile); // Save the selected file to state
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object for sending file and form data together
        const data = new FormData();

        // Append JSON data as a string under the "data" key
        data.append(
            'data',
            JSON.stringify({
                meetingId: formData.meetingId,
                hostName: formData.hostName,
                dateTime: formData.dateTime,
                duration: parseInt(formData.duration, 10), // Ensure duration is an integer
                title: formData.title,
            })
        );
        
        // Append the file under the "file" key
        data.append('file', file); // The file is selected using a file input field

        try {
            // Make the POST request to the backend
            const res = await axios.post('http://localhost:8080/api/meetings/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data', // This will be automatically set when using FormData
                },
            });

            // Set the response from the server
            setResponse(res.data);
            setError(null); // Clear previous errors
        } catch (err) {
            // Handle error and display the message
            setError(err.response?.data?.message || err.message);
        }
    };

    return (
        <div>
            <h1>Upload Meeting Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Meeting ID:</label>
                    <input
                        type="text"
                        name="meetingId"
                        value={formData.meetingId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Host Name:</label>
                    <input
                        type="text"
                        name="hostName"
                        value={formData.hostName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date and Time:</label>
                    <input
                        type="datetime-local"
                        name="dateTime"
                        value={formData.dateTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Duration (minutes):</label>
                    <input
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Transcript File:</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MeetingUploader;*/
/*import React, { useState } from 'react';
import axios from 'axios';

const MeetingUploader = () => {
    // State to hold form data and file
    const [formData, setFormData] = useState({
        meetingId: '',
        hostName: '',
        dateTime: '',
        duration: '',
        title: '',
    });

    const [file, setFile] = useState(null); // State to hold selected file
    const [response, setResponse] = useState(null); // Response from server
    const [error, setError] = useState(null); // Error state

    // Handle input changes for text fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile); // Save the selected file to state
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object for sending file and form data together
        const data = new FormData();

        // Append JSON data as a string under the "data" key
        data.append(
            'data',
            JSON.stringify({
                meetingId: formData.meetingId,
                hostName: formData.hostName,
                dateTime: formData.dateTime,
                duration: parseInt(formData.duration, 10), // Ensure duration is an integer
                title: formData.title,
            })
        );
        
        // Append the file under the "file" key
        data.append('file', file); // The file is selected using a file input field

        try {
            // Make the POST request to the backend
            const res = await axios.post('http://localhost:8080/api/meetings/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data', // This will be automatically set when using FormData
                },
            });

            // Set the response from the server
            setResponse(res.data);
            setError(null); // Clear previous errors
            alert("Upload Successful!");  // Display success pop-up
        } catch (err) {
            // Handle error and display the message
            setError(err.response?.data?.message || err.message);
            alert("Upload Failed! " + (err.response?.data?.message || err.message));  // Display error pop-up
        }
    };

    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <div style={styles.navbarContent}>
                    <h1 style={styles.navbarTitle}>Meeting Uploader</h1>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
                        <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
                    </ul>
                </div>
            </nav>

            <div style={styles.formContainer}>
                <h2 style={styles.formTitle}>Upload Meeting Details</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Meeting ID:</label>
                        <input
                            type="text"
                            name="meetingId"
                            value={formData.meetingId}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Host Name:</label>
                        <input
                            type="text"
                            name="hostName"
                            value={formData.hostName}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Date and Time:</label>
                        <input
                            type="datetime-local"
                            name="dateTime"
                            value={formData.dateTime}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Duration (minutes):</label>
                        <input
                            type="number"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Transcript File:</label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" style={styles.submitButton}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
    },
    navbar: {
        backgroundColor: '#4CAF50',
        padding: '10px 20px',
        color: 'white',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    navbarContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navbarTitle: {
        fontSize: '1.8rem',
        margin: 0,
    },
    navList: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
    },
    formContainer: {
        maxWidth: '600px',
        margin: '100px auto 20px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
        textAlign: 'center',
        color: '#333',
        fontSize: '2rem',
        marginBottom: '20px',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        fontWeight: 'bold',
        color: '#555',
        marginBottom: '8px',
    },
    input: {
        width: '100%',
        padding: '12px',
        margin: '6px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        boxSizing: 'border-box',
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease',
    },
    submitButtonHover: {
        backgroundColor: '#45a049',
    },
    errorMessage: {
        color: 'red',
        fontSize: '1rem',
        marginTop: '10px',
        textAlign: 'center',
    },
    successMessage: {
        color: 'green',
        fontSize: '1rem',
        marginTop: '10px',
        textAlign: 'center',
    },
};

export default MeetingUploader;*/
import React, { useState } from 'react';
import axios from 'axios';

// Modal Component
const Modal = ({ message, onClose, type }) => {
    return (
        <div style={styles.modalBackdrop}>
            <div style={styles.modal}>
                <h2 style={styles.modalTitle}>{type === 'success' ? 'Success!' : 'Error!'}</h2>
                <p>{message}</p>
                <button onClick={onClose} style={styles.modalCloseButton}>Close</button>
            </div>
        </div>
    );
};

const MeetingUploader = () => {
    // State to hold form data and file
    const [formData, setFormData] = useState({
        meetingId: '',
        hostName: '',
        dateTime: '',
        duration: '',
        title: '',
    });

    const [file, setFile] = useState(null); // State to hold selected file
    const [response, setResponse] = useState(null); // Response from server
    const [error, setError] = useState(null); // Error state
    const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
    const [modalMessage, setModalMessage] = useState(''); // Modal message content
    const [modalType, setModalType] = useState(''); // Type of modal: 'success' or 'error'

    // Handle input changes for text fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle file selection
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile); // Save the selected file to state
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create FormData object for sending file and form data together
        const data = new FormData();

        // Append JSON data as a string under the "data" key
        data.append(
            'data',
            JSON.stringify({
                meetingId: formData.meetingId,
                hostName: formData.hostName,
                dateTime: formData.dateTime,
                duration: parseInt(formData.duration, 10), // Ensure duration is an integer
                title: formData.title,
            })
        );
        
        // Append the file under the "file" key
        data.append('file', file); // The file is selected using a file input field

        try {
            // Make the POST request to the backend
            const res = await axios.post('http://localhost:8080/api/meetings/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data', // This will be automatically set when using FormData
                },
            });

            // Set the response from the server
            setResponse(res.data);
            setError(null); // Clear previous errors

            // Show success modal
            setModalType('success');
            setModalMessage('Upload Successful!');
            setModalOpen(true);

        } catch (err) {
            // Handle error and display the message
            setError(err.response?.data?.message || err.message);

            // Show error modal
            setModalType('error');
            setModalMessage('Upload Failed! ' + (err.response?.data?.message || err.message));
            setModalOpen(true);
        }
    };

    // Close the modal
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <div style={styles.navbarContent}>
                    <h1 style={styles.navbarTitle}>Meeting Uploader</h1>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
                        <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
                    </ul>
                </div>
            </nav>

            <div style={styles.formContainer}>
                <h2 style={styles.formTitle}>Upload Meeting Details</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Meeting ID:</label>
                        <input
                            type="text"
                            name="meetingId"
                            value={formData.meetingId}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Host Name:</label>
                        <input
                            type="text"
                            name="hostName"
                            value={formData.hostName}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Date and Time:</label>
                        <input
                            type="datetime-local"
                            name="dateTime"
                            value={formData.dateTime}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Duration (minutes):</label>
                        <input
                            type="number"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Transcript File:</label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" style={styles.submitButton}>Submit</button>
                    </div>
                </form>
            </div>

            {/* Modal Pop-up */}
            {modalOpen && (
                <Modal message={modalMessage} onClose={handleCloseModal} type={modalType} />
            )}
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
    },
    navbar: {
        backgroundColor: '#4CAF50',
        padding: '10px 20px',
        color: 'white',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    navbarContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navbarTitle: {
        fontSize: '1.8rem',
        margin: 0,
    },
    navList: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.1rem',
    },
    formContainer: {
        maxWidth: '600px',
        margin: '100px auto 20px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formTitle: {
        textAlign: 'center',
        color: '#333',
        fontSize: '2rem',
        marginBottom: '20px',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        fontWeight: 'bold',
        color: '#555',
        marginBottom: '8px',
    },
    input: {
        width: '100%',
        padding: '12px',
        margin: '6px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        boxSizing: 'border-box',
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease',
    },
    modalBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },
    modalTitle: {
        fontSize: '1.5rem',
        color: '#333',
        marginBottom: '10px',
    },
    modalCloseButton: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1.2rem',
    },
};

export default MeetingUploader;

