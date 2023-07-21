import { Animate } from "@/components/Animate";
import { Section } from "@/components/Section";
import { fade } from "@/components/animation/variants";
import { Box, Heading, Input, Stack, Textarea } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "react-scroll";
import { toast } from "react-toastify";

const ProductDesa = () => {
  const [inputData, setInputData] = useState({
    inputName: "",
    message: "",
  });

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  async function sendMail() {
    toast("Memproses pengiriman pesan, harap menunggu...");
    
    const response = await axios
      .post("/api/mail", inputData, {
        headers: {
          Accept: "Application/json",
        },
      })
      .catch((error) => {
        toast.error(error?.response?.message ?? error?.message ?? "Internal Server Error");
        return;
      });

    console.log(response);

    toast.success(response?.data?.message || "-");
  }

  const style = {
    button: {
      background: "#0b1a38",
      color: "white",
      borderRadius: ".4rem",
      width: "100%",
      height: "3.5rem",
      fontWeight: "600",
    },
    main: {
      fontFamily: "Manrope",
      padding: "2rem",
      paddingTop: "9rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    content: {
      description: {
        color: "#707070",
        paddingBottom: "3rem",
        textAlign: "center",
      },
    },
    pageTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      fontFamily: "EB Garamond Bold",
      marginBottom: "2rem",
    },
    input: {
      background: "#ebebeb",
      padding: "1.5rem",
      paddingInline: "1rem",
    },
  };

  return (
    <Animate variants={fade} triggerOnce={true}>
      <div style={style.main}>
        <Image width={4 * 16} height={4 * 16} alt="logo" src="/logos/pusat-bantuan-logo.png" />
        <div style={style.pageTitle}>Pusat Bantuan Desa Kemuning</div>
        <div style={style.content.description}>
          Mohon Bapak/Ibu untuk mengirimkan pesan bantuan maupun pertanyaan yang ingin ditujukan melalui formulir di bawah ini atau dengan menghubungi nomor Kantor Desa Kemuning Legok (021 - 29871982).
        </div>

        <Stack spacing={3} width={"100%"}>
          <Input onChange={(input) => setInputData((prev) => ({ ...prev, inputName: input?.target?.value }))} style={style.input} variant="outline" placeholder="Nama" />
          <Textarea minHeight={"10rem"} onChange={(input) => setInputData((prev) => ({ ...prev, message: input?.target?.value }))} style={style.input} placeholder="Pesan" />
          <button onClick={sendMail} style={style.button}>
            Kirim
          </button>
        </Stack>
      </div>
    </Animate>
  );
};

export default ProductDesa;
