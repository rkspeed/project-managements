import { Card, CardContent, Typography, Box, Button } from "@mui/material";

interface DashboardCardProps {
  title: string;
  value: string | number;
  onView?: () => void;
}

export const DashboardCard = ({ title, value, onView }: DashboardCardProps) => {
  return (
    <Card sx={{ minWidth: 120, margin: 1 }}>
      <CardContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h5">{value}</Typography>
        {onView && (
          <Box mt={1}>
            <Button size="small" onClick={onView}>
              VIEW
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
