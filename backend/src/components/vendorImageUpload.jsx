import React from 'react'
import { Box, FormGroup, InputGroup, FormMessage} from '@admin-bro/design-system'
import { Input} from '@admin-bro/design-system'
import { Label } from '@admin-bro/design-system'
import { Button } from '@admin-bro/design-system'
import { useState } from 'react'
import axios from 'axios'

// get the domain name from the url
function getDomainName() {
    var url = window.location.href;
    var domain = url.split('/')[2];
    return domain;
}

function vendorImageUpload() {

    const [selectedImage, setSelectedImage] = useState(null);
    const uploadImage = () => {
        const formData = new FormData();
        formData.append('image', selectedImage, selectedImage.name);
        formData.append('vendorId', document.getElementById('input1').value);
        const domain = getDomainName();
        axios.post(`http://${domain}/api/images/uploadVendor`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        }
        );
    };

  return (
    <Box variant='card'>
        <FormGroup>
            <Label required htmlFor='input1'>Vendor ID</Label>
            <InputGroup>
                <Input id='input1' />
            </InputGroup>
            <FormMessage>Paste the Vendor ID for which you want to upload image for</FormMessage>
            <input type="file" name="myImage" accept="image/*" onChange={(event) => {
                setSelectedImage(event.target.files[0]);
            }} />
        </FormGroup>
        <Button ml="default" onClick={uploadImage}>Submit</Button>
    </Box>
  )
}

export default vendorImageUpload