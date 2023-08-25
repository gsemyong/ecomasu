import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const NewsletterSubscribeEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>You&rsquo;ve subscribed to ecomasu updates</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded-xl bg-stone-900 p-[20px] text-white shadow-2xl">
            <Heading className="m-0 tracking-tight">
              ecoma
              <span className="text-yellow-500">su</span>
            </Heading>
            <Text className="mt-[20px]">
              You&rsquo;ve successfully subscribed to ecomasu updates. You will
              receive an email when we launch.
            </Text>
            <Hr className="mt-[20px]" />
            <Text className="mt-[20px]">
              In the meantime, make sure to join our{" "}
              <Link className="text-yellow-500" href="https://discord.com">
                Discord
              </Link>{" "}
              to get help and discuss the project.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewsletterSubscribeEmail;
