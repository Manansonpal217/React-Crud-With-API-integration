// Import necessary modules and components
import React, { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

// Component definition
const Form = () => {
  const navigate = useNavigate();
  // State to manage the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    website: "",
  });

  // State to manage errors
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    mobile: false,
    address: false,
    password: false,
    website: false,
  });

  // Validation function for email
  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  // Validation function for password
  const validatePassword = (value) => {
    const isValid =
      /[a-z]/.test(value) &&
      /[A-Z]/.test(value) &&
      /\d/.test(value) &&
      /[!@#$%^&*]/.test(value);

    setErrors({
      ...errors,
      password: !isValid,
    });

    return isValid;
  };

  // Event handler for input change
  const handleInputChange = (event, type) => {
    const { value } = event.target;

    // Update the form data
    setFormData({
      ...formData,
      [type]: value,
    });

    // Perform validation based on whether the field is non-empty
    setErrors({
      ...errors,
      [type]:
        value.trim() === "" ||
        (type === "email" && !validateEmail(value)) ||
        (type === "password" && !validatePassword(value)) ||
        (type === "website" && !validateWebsite(value)),
    });
  };

  const validateWebsite = (value) => {
    // Simple validation for a valid URL
    return /^(ftp|http|https):\/\/[^ "]+$/.test(value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any field is empty or fails specific validations
    const hasErrors = Object.keys(formData).some(
      (key) =>
        formData[key].trim() === "" ||
        (key === "email" && !validateEmail(formData[key])) ||
        (key === "password" && !validatePassword(formData[key]))
    );

    // If any field has errors, set errors for all fields
    if (hasErrors) {
      setErrors({
        name: formData.name.trim() === "",
        email: formData.email.trim() === "" || !validateEmail(formData.email),
        mobile: formData.mobile.trim() === "",
        address: formData.address.trim() === "",
        password:
          formData.password.trim() === "" ||
          !validatePassword(formData.password),
        website: formData.website.trim() === "",
      });
      return;
    }
    // Retrieve data from localStorage and parse it as an array
    let storedData = JSON.parse(localStorage.getItem("Data")) || [];

    // Ensure storedData is always an array
    if (!Array.isArray(storedData)) {
      console.error("Data in localStorage is not an array:", storedData);
      storedData = [];
    }

    // Push a new object into the array
    storedData.push({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      password: formData.password,
      website: formData.website,
    });

    // Your custom logic for form submission
    localStorage.setItem("Data", JSON.stringify(storedData));
    navigate("Table");

    // Display a success toast
    toast.success("Form submitted successfully!", {
      onClose: () => {
        // Reset the form values after the toast is closed
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          password: "",
          website: "",
        });

        // Reset the errors
        setErrors({
          name: false,
          email: false,
          mobile: false,
          address: false,
          password: false,
          website: false,
        });
      },
    });
  };

  // Render the component
  return (
    <section className="main-section">
      <section className="form-section">
        <h1 className="form-heading">Login 👇</h1>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            margin: "1rem",
            height: "100%",
            "& > :not(style)": { m: 1.2, width: "100%", height: "100%" },
          }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <TextField
            error={errors.name}
            id="name"
            label="Name"
            value={formData.name}
            helperText={errors.name ? "Name is required." : ""}
            onChange={(e) => handleInputChange(e, "name")}
          />
          <TextField
            error={errors.email}
            id="email"
            label="Email"
            value={formData.email}
            helperText={errors.email ? "Invalid email address." : ""}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <TextField
            error={errors.mobile}
            id="mobile"
            label="Mobile"
            value={formData.mobile}
            helperText={errors.mobile ? "Mobile number is required." : ""}
            onChange={(e) => handleInputChange(e, "mobile")}
          />
          <TextField
            error={errors.address}
            id="address"
            label="Address"
            value={formData.address}
            helperText={errors.address ? "Address is required." : ""}
            onChange={(e) => handleInputChange(e, "address")}
          />
          <TextField
            error={errors.website}
            id="website"
            label="Website"
            value={formData.website}
            helperText={errors.website ? "Website URL is required." : ""}
            onChange={(e) => handleInputChange(e, "website")}
          />
          <TextField
            error={errors.password}
            id="password"
            label="Password"
            type="password"
            value={formData.password}
            helperText={
              errors.password
                ? "Invalid Password"
                : "Password must contain an Uppercase Letter,an lowercase and an special character"
            }
            onChange={(e) => handleInputChange(e, "password")}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </section>
    </section>
  );
};

// Export the component
export default Form;
