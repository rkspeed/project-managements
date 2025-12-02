import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../products/productSlice";
import { DashboardCard } from "./../../components/layout/DashboardCard";
import { Chart } from "../../components/common/Chart";
import { Box, Grid, Typography, Switch } from "@mui/material";

const DashboardPage: React.FC = () => {
    const dispatch = useDispatch<any>();
    const { products } = useSelector((state: any) => state.products);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const chartData = [
        { day: "Mon", EUR: 2000, SEK: 1200, DKK: 800 },
        { day: "Tue", EUR: 4000, SEK: 2500, DKK: 1000 },
        { day: "Wed", EUR: 6000, SEK: 3800, DKK: 1800 },
        { day: "Thu", EUR: 5000, SEK: 3000, DKK: 2000 },
        { day: "Fri", EUR: 7000, SEK: 4000, DKK: 1500 },
        { day: "Sat", EUR: 3000, SEK: 1500, DKK: 900 },
        { day: "Sun", EUR: 1500, SEK: 900, DKK: 500 },
    ];

    return (
        <Box p={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4">Hello Jennie Andersson</Typography>

            </Box>

            <Grid container spacing={2} mt={2}>
                <DashboardCard title="Approve" value={15} />
                <DashboardCard title="Sign" value={0} />
                <DashboardCard title="Assign" value={8} />
                <DashboardCard title="Disputes" value={11} />
                <DashboardCard title="Alerts" value={0} />
            </Grid>

            <Box mt={4}>
                <Typography variant="h6">Spend Over Time</Typography>
                <Chart type="line" data={chartData} dataKey={["EUR", "SEK", "DKK"]} colors={["#1976d2", "#2e7d32", "#ffb300"]} />
            </Box>
        </Box>
    );
};
export default DashboardPage;

