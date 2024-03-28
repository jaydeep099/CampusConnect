/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import {
  Box,
  CardBody,
  Container,
  Heading,
  Tbody,
  Td,
  Tr,
  Card,
  Table
} from "@chakra-ui/react";
// import { Card, Table } from "antd";
import { useLocation } from "react-router-dom";
import { LoadStudentById } from "../services/student-service";

const StudentProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    LoadStudentById(location.state.student_Id).then((response) => {
      setProfileData(response);
    }).catch((error) => {
      console.log(error);
    })
  },[]);
  
  return (
    <Base>
      <Box className="Profile" mt={4} mb={4} minHeight="500px">
        <Container maxW="container.md">
          <Box textAlign="center">
            <Heading>User Profile Details</Heading>
          </Box>
          {profileData && (
            <Card>
              <CardBody>
                <Table variant="striped" borderWidth="1px" borderRadius="md">
                  <Tbody>
                    <Tr>
                      <Td>NAME</Td>
                      <Td>{profileData.studentName}</Td>
                    </Tr>
                    <Tr>
                      <Td>USERNAME</Td>
                      <Td>{profileData.studentUsername}</Td>
                    </Tr>
                    <Tr>
                      <Td>SEMESTER</Td>
                      <Td>{profileData.studentSem}</Td>
                    </Tr>
                    <Tr>
                      <Td>DEPARTMENT</Td>
                      <Td>{profileData.studentDept}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
          )}
        </Container>
      </Box>
    </Base>
  );
};

export default StudentProfile;