import React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

const UserData = () => {
  const { state } = useLocation();

  return (
    <div>
      <Typography variant="subtitle2" gutterBottom>
        Nombre:
        <Typography variant="body2" gutterBottom>
          {state.name}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Correo:
        <Typography variant="body2" gutterBottom>
          {state.mail}
        </Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Telefono:
        <Typography variant="body2" gutterBottom>
          {state.phone}
        </Typography>
      </Typography>
    </div>
  );
};

export default UserData;
