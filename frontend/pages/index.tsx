import Typography from "@material-ui/core/Typography";
import React from "react";
import { Box, Button, List, ListItem, ListItemText } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/user";

import Link from "next/link";

const Home: React.FC = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <>
      {user.loggedIn != false && (
        <Typography variant="h2">
          Welcome {`${user.firstName} ${user.lastName}`}
        </Typography>
      )}
      <Box margin={2}>
        <Typography
          style={{
            textAlign: "justify",
          }}
          variant="body1"
        >
          The WalletWatch is a user-friendly, web-based application designed to
          simplify personal and business expense management. Its intuitive
          interface facilitates easy navigation through income and expenses,
          categories, and reports, ensuring a seamless and enjoyable experience
          for users of all levels. With comprehensive expense logging, real-time
          data synchronization across devices, and features like smart budgeting
          and visual analytics, users can gain valuable insights into their
          financial habits and make informed decisions. Security is paramount,
          with robust encryption measures protecting sensitive financial data.
          The application's customization options allow users to tailor expense
          categories and tags to align with their unique financial goals.
          Supporting long-term financial planning, collaboration, and
          multi-platform accessibility, the EfficientExpense Tracker is the
          ultimate tool for individuals and businesses looking to take control
          of their finances, simplify expense management, and achieve financial
          success.
        </Typography>
      </Box>
      <Typography variant={"h5"}>What are the different pages?</Typography>
      <List
        style={{
          display: "grid",
          gridTemplateColumns: "200px 200px",
          alignItems: "stretch",
        }}
      >
        <Link href={"/"}>
          <ListItem>
            <Button variant="outlined">
              <ListItemText
                primary={"Home"}
                secondary={"The page you are on now."}
              />
            </Button>
          </ListItem>
        </Link>
        <Link href={"/account"}>
          <ListItem>
            <Button variant="outlined">
              <ListItemText
                primary={"Account"}
                secondary={
                  "Where you can manage your budget and user specific details."
                }
              />
            </Button>
          </ListItem>
        </Link>
        <Link href={"/transactions"}>
          <ListItem>
            <Button variant="outlined">
              <ListItemText
                primary={"Transactions"}
                secondary={"Where you can manage your revenue and expenses."}
              />
            </Button>
          </ListItem>
        </Link>
        <Link href={"/dashboard"}>
          <ListItem>
            <Button variant="outlined">
              <ListItemText
                primary={"Dashboard"}
                secondary={
                  "Where you can view graphs and trends in your spending."
                }
              />
            </Button>
          </ListItem>
        </Link>
      </List>
      <Typography variant={"h5"}>Great! So how do I start?</Typography>
      <Box margin={2}>
        <Typography variant="body1">
          Head over to the Register page on the left to create an account! If
          you already have an account, all you need to do is Login on the top
          right and you're good to start tracking!
        </Typography>
      </Box>
    </>
  );
};

export default Home;
