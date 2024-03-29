import React from 'react';
import { Box, FormGroup, InputGroup, FormMessage } from '@admin-bro/design-system';
import { Input } from '@admin-bro/design-system';
import { Label } from '@admin-bro/design-system';
import { Button } from '@admin-bro/design-system';
import { useState } from 'react';
import axios from 'axios';

// get the domain name from the url
function getDomainName() {
    let url = window.location.href;
    let newDomain = url.substring(0, url.indexOf('/admin'));
    return newDomain;
}

function vendorImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);
    const uploadImage = () => {
        const formData = new FormData();
        formData.append('image', selectedImage, selectedImage.name);
        formData.append('vendorId', document.getElementById('input1').value);
        const domain = getDomainName();
        axios
            .post(`${domain}/api/images/uploadVendor`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                alert('Vendor Logo Uploaded Successfully');
                // clear the input field
                document.getElementById('input1').value = '';
                // clear the file input field
                document.getElementsByName('myImage')[0].value = '';
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Box variant="card">
            <FormGroup>
                <Label required htmlFor="input1">
                    Vendor ID
                </Label>
                <InputGroup>
                    <Input id="input1" />
                </InputGroup>
                <FormMessage>
                    Paste the Vendor ID for which you want to upload image for
                </FormMessage>
                <input
                    type="file"
                    name="myImage"
                    accept="image/*"
                    onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                    }}
                />
            </FormGroup>
            <Button ml="default" onClick={uploadImage}>
                Submit
            </Button>
        </Box>
    );
}

export default vendorImageUpload;
