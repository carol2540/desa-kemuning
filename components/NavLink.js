import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export const NavLink = ({ text, targetId, style, className }) => {
  return (
    <Link href={targetId} style={style} className={className}>
      <Text
        as="p"
        color="black"
        fontSize="md"
        cursor={"pointer"}
        _hover={{ color: "primary.200", transition: "all 0.2s" }}
      >
        {text}
      </Text>
    </Link>
  );
};
