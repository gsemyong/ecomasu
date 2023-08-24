import {
  Html,
  Head,
  Preview,
  Tailwind,
  Link,
  Container,
  Section,
  Text,
  Heading,
} from "@react-email/components";

export const NewsletterSubscribeEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>You have successfully subscribed to ecomasu updates</Preview>
      <Tailwind>
        <Container className="bg-white px-6 pb-6 font-sans">
          <Heading
            as="h4"
            className="scroll-m-20 text-xl font-semibold tracking-tight"
          >
            You have successfully subscribed to ecomasu updates
          </Heading>
          <Text className="leading-7 [&:not(:first-child)]:mt-6">
            Much stuff is coming soon, stay tuned! For now go explore the
            following links:
          </Text>
          <Section>
            <Link className="mr-4" href="https://example.com">
              Docs
            </Link>
            <Link className="mr-4" href="https://example.com">
              Discord
            </Link>
            <Link className="mr-4" href="https://example.com">
              Github
            </Link>
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
};

export default NewsletterSubscribeEmail;
