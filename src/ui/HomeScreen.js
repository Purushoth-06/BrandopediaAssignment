import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";

const faqList = [
  {
    question: "How do I set up my account and add my teen?",
    answer:
      "Download the app, sign up as a parent, and use the 'Add Teen' feature to send an invite link to your child.",
  },
  {
    question: "Can I control my teen’s spending?",
    answer:
      "Yes! Set spending limits, approve transactions, or freeze the card anytime from your parent dashboard.",
  },
  {
    question: "How can I guide my teen’s financial habits?",
    answer:
      "Use built-in goals, challenges, and insights to teach saving, budgeting, and smart spending together.",
  },
  {
    question: "Is there a limit to teens I can manage?",
    answer: "No limit! Add as many teens as needed under one parent account.",
  },
  {
    question: "How do I log in to the app?",
    answer:
      "Use your registered email and password. Enable Face ID or biometric login for faster access.",
  },
  {
    question: "Can I create my own financial goals?",
    answer:
      "Absolutely! Teens can set personal savings goals; parents can create family or shared goals.",
  },
  {
    question: "Do I need approval for all my spending?",
    answer:
      "Only for transactions above your set limit. Everyday small spends are auto-approved.",
  },
  {
    question: "What kind of financial advice will I get?",
    answer:
      "Personalized tips based on spending patterns, age-appropriate lessons, and expert-curated content.",
  },
];

const features = [
  {
    title: "Parents in Control",
    icon: "people-outline",
    color: "#FF6B6B",
    description:
      "Set budgets, approve purchases, and monitor spending in real time.",
  },
  {
    title: "Teens Take Charge",
    icon: "game-controller-outline",
    color: "#C44BFF",
    description:
      "Teens manage their own allowance, set goals, and earn rewards.",
  },
  {
    title: "Insights That Inspire",
    icon: "bulb-outline",
    color: "#4ECDC4",
    description:
      "Weekly reports, spending trends, and personalized tips for the whole family.",
  },
  {
    title: "Financial Wisdom, Together",
    icon: "leaf-outline",
    color: "#FFE66D",
    description:
      "Shared family goals, challenges, and educational content for every age.",
  },
  {
    title: "Accounts Built Just for You",
    icon: "card-outline",
    color: "#1A535C",
    description:
      "Custom debit cards, virtual wallets, and FDIC-insured accounts.",
  },
  {
    title: "Learn and Grow with Others",
    icon: "people-outline",
    color: "#F48C06",
    description:
      "Join community challenges, leaderboards, and peer-to-peer learning.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "17-year-old High Schooler",
    text: "I finally feel in control of my money. I saved for my first phone without asking my parents!",
  },
  {
    name: "Liam Turner",
    role: "Community Member & Financial Coach",
    text: "The best tool I’ve seen for teaching teens real-world finance. Simple, visual, and fun.",
  },
  {
    name: "Nouman Ejaz",
    role: "Parent of Two Teens",
    text: "This app has transformed how I manage my kids’ allowances. I love how I can guide them while giving them freedom. It feels like collaboration, not control.",
    appId: "PARENT1284",
  },
];

export default function HomeScreen() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [openFeature, setOpenFeature] = useState(null);

  return (
    <LinearGradient
      colors={["#000000", "#000000", "#032A2F"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#3a757465",
                padding: 5,
                borderRadius: 12,
              }}
            >
              <Ionicons name="menu" size={32} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* App name */}
          <Text
            style={{
              color: "#fff",
              fontSize: 40,
              fontFamily: "Montserrat_300Light",
              textAlign: "center",
            }}
          >
            GROWNEST
          </Text>

          <Text
            style={{
              color: "#A0A0A0",
              fontSize: 14,
              marginBottom: 30,
              fontFamily: "Poppins_400Regular",
              textAlign: "center",
            }}
          >
            Parent control and Teen autonomy at same place
          </Text>

          {/* Hero image */}
          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <Image
              source={require("../../assets/bgimage.png")}
              style={{ width: 260, height: 380, resizeMode: "contain" }}
            />
          </View>

          {/* Stats cards */}
          <View style={{ marginTop: 40, gap: 12 }}>
            {[
              { label: "Downloads", value: "1M+ Users" },
              { label: "Reviews", value: "4.4 Rating" },
              { label: "Rated for", value: "3+ Age group" },
            ].map((stat, i) => (
              <Animatable.View
                key={i}
                animation="fadeInUp"
                delay={100 + i * 100}
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  padding: 16,
                  borderRadius: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  {stat.label}
                </Text>
                <Text
                  style={{ color: "#888", fontFamily: "Poppins_400Regular" }}
                >
                  {stat.value}
                </Text>
              </Animatable.View>
            ))}
          </View>

          {/* Description */}
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              lineHeight: 24,
              marginTop: 30,
              fontFamily: "Poppins_400Regular",
            }}
          >
            <Text
              style={{
                color: "#00BFFF",
                fontFamily: "Montserrat_600SemiBold",
              }}
            >
              Grownest
            </Text>{" "}
            is a family-first startup revolutionizing financial literacy. Our
            app empowers parents to manage family finances while teaching teens
            smart money habits through goal-setting and real-world experiences.
          </Text>

          {/* Features*/}
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontFamily: "Montserrat_700Bold",
              marginTop: 50,
              marginBottom: 16,
            }}
          >
            Features
          </Text>

          <View style={{ gap: 12 }}>
            {features.map((feat, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() =>
                    setOpenFeature(openFeature === index ? null : index)
                  }
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    padding: 16,
                    borderRadius: 12,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: "#6d6b6bc7",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <Ionicons name={feat.icon} size={26} color={feat.color} />
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontFamily: "Poppins_500Medium",
                      }}
                    >
                      {feat.title}
                    </Text>
                  </View>
                  <Ionicons
                    name={openFeature === index ? "chevron-up" : "chevron-down"}
                    size={20}
                    color="#00BFFF"
                  />
                </TouchableOpacity>

                {openFeature === index && (
                  <Animatable.View
                    animation="fadeIn"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      padding: 16,
                      borderRadius: 12,
                      marginTop: 6,
                    }}
                  >
                    <Text
                      style={{
                        color: "#ccc",
                        fontSize: 14,
                        lineHeight: 20,
                        fontFamily: "Poppins_400Regular",
                      }}
                    >
                      {feat.description}
                    </Text>
                  </Animatable.View>
                )}
              </View>
            ))}
          </View>

          {/* Testimonials*/}
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontFamily: "Montserrat_700Bold",
              marginTop: 50,
            }}
          >
            Testimonials
          </Text>

          <View style={{ marginTop: 20, gap: 12 }}>
            {testimonials.map((t, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  padding: 18,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: "#6d6b6bc7",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: "#333",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name="person" size={20} color="#888" />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: "Montserrat_600SemiBold",
                      }}
                    >
                      {t.name}
                    </Text>
                    <Text
                      style={{
                        color: "#888",
                        fontSize: 12,
                        fontFamily: "Poppins_400Regular",
                      }}
                    >
                      {t.role}
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#fff",
                    lineHeight: 20,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  "{t.text}"
                </Text>

                {t.appId && (
                  <Text
                    style={{
                      color: "#666",
                      fontSize: 12,
                      marginTop: 10,
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    App ID: {t.appId}
                  </Text>
                )}
              </View>
            ))}
          </View>

          <View style={{ alignItems: "center", marginVertical: 50 }}>
            <View style={{ alignItems: "center", marginVertical: 50 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontFamily: "Montserrat_600SemiBold",
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                “Smart Money Habits, One Tap Away”
              </Text>

              <Text
                style={{
                  color: "#888",
                  fontSize: 14,
                  marginBottom: 24,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                Available now on iOS and Android
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 24,
                  width: "100%",
                  paddingHorizontal: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://play.google.com")}
                  style={{ flex: 1, maxWidth: 160 }}
                >
                  <Image
                    source={require("../../assets/Downloads-Mobile.png")}
                    style={{ width: "100%", height: 50, resizeMode: "contain" }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL("https://www.apple.com/app-store")
                  }
                  style={{ flex: 1, maxWidth: 160 }}
                >
                  <Image
                    source={require("../../assets/Downloads-Mobile-IOS.png")}
                    style={{ width: "100%", height: 50, resizeMode: "contain" }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* FAQs */}
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontFamily: "Montserrat_700Bold",
              marginBottom: 16,
            }}
          >
            FAQs
          </Text>

          {faqList.map((item, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <TouchableOpacity
                onPress={() => setOpenFAQ(openFAQ === index ? null : index)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  padding: 16,
                  borderRadius: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: "#6d6b6bc7",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    flex: 1,
                    paddingRight: 10,
                    fontSize: 15,
                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  {item.question}
                </Text>
                <Ionicons
                  name={openFAQ === index ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="#00BFFF"
                />
              </TouchableOpacity>

              {openFAQ === index && (
                <Animatable.View
                  animation="fadeIn"
                  style={{ paddingHorizontal: 16, paddingVertical: 12 }}
                >
                  <Text
                    style={{
                      color: "#A0A0A0",
                      lineHeight: 20,
                      fontSize: 14,
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    {item.answer}
                  </Text>
                </Animatable.View>
              )}
            </View>
          ))}

          {/* Newsletter */}
          <View style={{ marginTop: 60, marginBottom: 40 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                marginBottom: 12,
                textAlign: "center",
                fontFamily: "Poppins_500Medium",
              }}
            >
              Stay Updated — Join Our Newsletter!
            </Text>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <TextInput
                placeholder="Enter your mail id"
                placeholderTextColor="#777"
                style={{
                  flex: 1,
                  padding: 14,
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "Poppins_400Regular",
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#00BFFF",
                  paddingHorizontal: 20,
                  justifyContent: "center",
                }}
              >
                <Ionicons name="arrow-forward" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={{ alignItems: "center", marginBottom: 40 }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#00BFFF",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Ionicons name="finger-print" size={28} color="#fff" />
            </View>

            <View style={{ flexDirection: "row", gap: 30, marginBottom: 20 }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#00BFFF",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  NAVIGATION
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#00BFFF",
                    fontFamily: "Montserrat_600SemiBold",
                  }}
                >
                  CONTACT US
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 16,
                marginBottom: 20,
              }}
            >
              {["Features", "Testimonials", "FAQs"].map((txt) => (
                <Text
                  key={txt}
                  style={{ color: "#888", fontFamily: "Poppins_400Regular" }}
                >
                  {txt}
                </Text>
              ))}
            </View>

            <View style={{ alignItems: "center", marginBottom: 20, gap: 4 }}>
              <Text style={{ color: "#888", fontFamily: "Poppins_400Regular" }}>
                support@grownest.com
              </Text>
              <Text style={{ color: "#888", fontFamily: "Poppins_400Regular" }}>
                +1 501-234-2546
              </Text>
              <Text style={{ color: "#888", fontFamily: "Poppins_400Regular" }}>
                Bangalore, India
              </Text>
            </View>

            <View style={{ flexDirection: "row", gap: 20, marginBottom: 20 }}>
              <TouchableOpacity>
                <Ionicons name="logo-linkedin" size={24} color="#888" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="logo-instagram" size={24} color="#888" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="logo-facebook" size={24} color="#888" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 16,
              }}
            >
              {["Blog & Resources", "Privacy Policy", "Terms & Conditions"].map(
                (txt) => (
                  <Text
                    key={txt}
                    style={{ color: "#888", fontFamily: "Poppins_400Regular" }}
                  >
                    {txt}
                  </Text>
                )
              )}
            </View>

            <Text
              style={{
                color: "#555",
                marginTop: 30,
                fontSize: 12,
                fontFamily: "Poppins_400Regular",
              }}
            >
              © 2025 Grownest. All Rights Reserved.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
