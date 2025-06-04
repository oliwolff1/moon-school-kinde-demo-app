"use client";

import {
  LogoutLink,
  PortalLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Rocket,
  Star,
  Zap,
  CreditCard,
  ArrowUp,
  CheckCircle,
  Target,
  Shield,
  Gauge,
  Satellite,
  Globe,
  Activity,
} from "lucide-react";

interface User {
  id?: string;
  email?: string | null;
  given_name?: string | null;
  family_name?: string | null;
}

interface DashboardContentProps {
  user: User | null;
}

export default function DashboardContent({ user }: DashboardContentProps) {
  // Mock data - in a real app, this would come from your database
  const userPlan = {
    name: "Martian Explorer",
    price: "$49/mo",
    color: "from-orange-500 to-orange-600",
    badge: "Active",
  };

  const missionStats = {
    simulationsUsed: 15,
    simulationsLimit: 999, // Unlimited for Martian Explorer
    cargoUsed: 45,
    cargoLimit: 100,
    coursesCompleted: 8,
    totalCourses: 12,
    xpEarned: 2450,
    missionRank: "Commander",
  };

  const recentMissions = [
    {
      id: 1,
      name: "Mars Landing Protocol",
      status: "completed",
      date: "2024-01-15",
      xp: 150,
      difficulty: "Advanced",
    },
    {
      id: 2,
      name: "Orbital Mechanics",
      status: "in-progress",
      date: "2024-01-18",
      xp: 0,
      difficulty: "Intermediate",
    },
    {
      id: 3,
      name: "Deep Space Navigation",
      status: "pending",
      date: "2024-01-20",
      xp: 0,
      difficulty: "Expert",
    },
  ];

  const systemStatus = [
    { name: "Life Support", status: "optimal", value: 98 },
    { name: "Navigation", status: "optimal", value: 100 },
    { name: "Communications", status: "warning", value: 85 },
    { name: "Propulsion", status: "optimal", value: 94 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Stars and Cosmic Background */}
      <div className="absolute inset-0">
        {/* Animated stars */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full star-1"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full star-2"></div>
        <div className="absolute top-40 left-1/4 w-0.5 h-0.5 bg-white rounded-full star-3"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full star-4"></div>
        <div className="absolute bottom-40 left-20 w-0.5 h-0.5 bg-white rounded-full star-5"></div>
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-white rounded-full star-6"></div>
        <div className="absolute top-1/3 left-10 w-0.5 h-0.5 bg-white rounded-full star-7"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full star-8"></div>

        {/* Additional smaller stars */}
        <div className="absolute top-32 left-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full star-9"></div>
        <div className="absolute top-80 right-1/4 w-0.5 h-0.5 bg-orange-300 rounded-full star-10"></div>
        <div className="absolute bottom-32 left-1/2 w-0.5 h-0.5 bg-purple-300 rounded-full star-11"></div>
      </div>

      {/* Enhanced cosmic nebula effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-900/20 via-blue-900/15 to-transparent rounded-full blur-3xl nebula-1"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-orange-900/20 via-red-900/15 to-transparent rounded-full blur-3xl nebula-2"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-t from-green-900/15 via-teal-900/10 to-transparent rounded-full blur-3xl nebula-3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Enhanced Header with Mission Control Aesthetics */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-green-400 text-sm font-semibold tracking-wider">
                SYSTEM ONLINE
              </span>
              <div className="hidden lg:flex items-center gap-2 ml-auto">
                <div className="text-gray-400 text-sm">Total XP:</div>
                <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  {missionStats.xpEarned.toLocaleString()}
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 mb-2 drop-shadow-lg">
              Welcome, Commander {user?.given_name} 🚀
            </h1>
            <p className="text-gray-300 text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              Mission Control Dashboard • Rank: {missionStats.missionRank}
            </p>
          </div>

          {/* Mobile XP and Logout */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-4">
            <div className="lg:hidden">
              <div className="text-gray-400 text-sm">Total XP</div>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {missionStats.xpEarned.toLocaleString()}
              </div>
            </div>
            <LogoutLink className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30 flex items-center gap-2">
              <span>End Mission</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </LogoutLink>
            <PortalLink className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-2">
              <span>Portal</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </PortalLink>
          </div>
        </div>

        {/* Enhanced Current Plan Badge with Glow */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-900/40 to-orange-800/30 border border-orange-500 rounded-xl px-8 py-5 backdrop-blur-sm shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300">
            <div className="relative">
              <Star className="w-8 h-8 text-orange-400 drop-shadow-lg" />
              <div className="absolute inset-0 w-8 h-8 bg-orange-400 rounded opacity-20 blur animate-pulse"></div>
            </div>
            <div className="flex-1">
              <div className="text-white font-bold text-xl">
                {userPlan.name}
              </div>
              <div className="text-orange-300 text-sm font-medium">
                {userPlan.price} • Premium Access
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg shadow-green-500/30">
                {userPlan.badge.toUpperCase()}
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </div>
          </div>
        </div>

        {/* System Status Panel */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            System Status
          </h2>
          <div className="grid gap-3 md:grid-cols-4">
            {systemStatus.map((system) => (
              <div
                key={system.name}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-600 rounded-lg p-4 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm font-medium">
                    {system.name}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      system.status === "optimal"
                        ? "bg-green-400 shadow-lg shadow-green-400/50"
                        : system.status === "warning"
                          ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
                          : "bg-red-400 shadow-lg shadow-red-400/50"
                    } animate-pulse`}
                  ></div>
                </div>
                <div className="text-lg font-bold text-white">
                  {system.value}%
                </div>
                <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      system.status === "optimal"
                        ? "bg-gradient-to-r from-green-500 to-green-400"
                        : system.status === "warning"
                          ? "bg-gradient-to-r from-yellow-500 to-yellow-400"
                          : "bg-gradient-to-r from-red-500 to-red-400"
                    }`}
                    style={{ width: `${system.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Mission Activity Tracker */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Gauge className="w-6 h-6 text-orange-400" />
            Mission Activity Tracker
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Rocket Simulations */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-600 rounded-xl p-6 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <Rocket className="w-7 h-7 text-orange-400 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 w-7 h-7 bg-orange-400 rounded opacity-20 blur animate-pulse"></div>
                </div>
                <h3 className="text-white font-bold text-lg">
                  Rocket Simulations
                </h3>
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 mb-3 drop-shadow-lg">
                {missionStats.simulationsUsed}
              </div>
              <div className="text-gray-300 font-medium">
                {missionStats.simulationsLimit === 999
                  ? "∞ Unlimited"
                  : `of ${missionStats.simulationsLimit}`}{" "}
                this month
              </div>
              <div className="mt-3 text-xs text-orange-300 font-semibold">
                PREMIUM ACCESS
              </div>
            </div>

            {/* Cargo Allowance */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-600 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <Target className="w-7 h-7 text-blue-400 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 w-7 h-7 bg-blue-400 rounded opacity-20 blur animate-pulse"></div>
                </div>
                <h3 className="text-white font-bold text-lg">Cargo Status</h3>
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3 drop-shadow-lg">
                {missionStats.cargoUsed}kg
              </div>
              <div className="text-gray-300 font-medium mb-3">
                of {missionStats.cargoLimit}kg allowance
              </div>
              <div className="bg-gray-700 rounded-full h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-500 shadow-lg shadow-blue-500/30"
                  style={{
                    width: `${(missionStats.cargoUsed / missionStats.cargoLimit) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Courses Progress */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-600 rounded-xl p-6 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <Zap className="w-7 h-7 text-green-400 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 w-7 h-7 bg-green-400 rounded opacity-20 blur animate-pulse"></div>
                </div>
                <h3 className="text-white font-bold text-lg">
                  Training Progress
                </h3>
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-3 drop-shadow-lg">
                {missionStats.coursesCompleted}/{missionStats.totalCourses}
              </div>
              <div className="text-gray-300 font-medium mb-3">
                courses completed
              </div>
              <div className="bg-gray-700 rounded-full h-3 shadow-inner">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full transition-all duration-500 shadow-lg shadow-green-500/30"
                  style={{
                    width: `${(missionStats.coursesCompleted / missionStats.totalCourses) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced My Missions */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-600 rounded-xl p-6 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="relative">
                  <Rocket className="w-7 h-7 text-orange-400 drop-shadow-lg" />
                  <div className="absolute inset-0 w-7 h-7 bg-orange-400 rounded opacity-20 blur animate-pulse"></div>
                </div>
                My Missions
                <div className="ml-auto text-sm text-gray-400 font-normal">
                  {recentMissions.length} Active
                </div>
              </h2>
              <div className="space-y-4">
                {recentMissions.map((mission) => (
                  <div
                    key={mission.id}
                    className="group p-5 bg-gradient-to-r from-gray-800/40 to-gray-900/30 rounded-xl border border-gray-700 hover:border-gray-600 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-4 h-4 rounded-full shadow-lg ${
                            mission.status === "completed"
                              ? "bg-green-400 shadow-green-400/50"
                              : mission.status === "in-progress"
                                ? "bg-orange-400 shadow-orange-400/50 animate-pulse"
                                : "bg-gray-500 shadow-gray-500/50"
                          }`}
                        ></div>
                        <div>
                          <h3 className="text-white font-semibold text-lg group-hover:text-orange-300 transition-colors duration-300">
                            {mission.name}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <p className="text-gray-400 text-sm">
                              {mission.date}
                            </p>
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-semibold ${
                                mission.difficulty === "Expert"
                                  ? "bg-red-500/20 text-red-300"
                                  : mission.difficulty === "Advanced"
                                    ? "bg-orange-500/20 text-orange-300"
                                    : "bg-blue-500/20 text-blue-300"
                              }`}
                            >
                              {mission.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {mission.status === "completed" && (
                          <div className="text-green-400 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full">
                            +{mission.xp} XP
                          </div>
                        )}
                        <div
                          className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                            mission.status === "completed"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : mission.status === "in-progress"
                                ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                                : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                          }`}
                        >
                          {mission.status.replace("-", " ").toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50">
                🚀 Launch New Mission
              </button>
            </div>

            {/* Enhanced Entitlements */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-600 rounded-xl p-6 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="relative">
                  <CheckCircle className="w-7 h-7 text-green-400 drop-shadow-lg" />
                  <div className="absolute inset-0 w-7 h-7 bg-green-400 rounded opacity-20 blur animate-pulse"></div>
                </div>
                Mission Entitlements
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/15 to-green-500/5 border border-green-500/40 rounded-xl hover:border-green-500/60 transition-all duration-300 group">
                  <CheckCircle className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-white font-semibold">
                      Moon School Courses
                    </div>
                    <div className="text-green-300 text-sm">Full Access</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/15 to-green-500/5 border border-green-500/40 rounded-xl hover:border-green-500/60 transition-all duration-300 group">
                  <CheckCircle className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-white font-semibold">
                      Unlimited Simulations
                    </div>
                    <div className="text-green-300 text-sm">
                      Premium Feature
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/15 to-green-500/5 border border-green-500/40 rounded-xl hover:border-green-500/60 transition-all duration-300 group">
                  <CheckCircle className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-white font-semibold">
                      100kg Cargo Allowance
                    </div>
                    <div className="text-green-300 text-sm">45kg Used</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/15 to-green-500/5 border border-green-500/40 rounded-xl hover:border-green-500/60 transition-all duration-300 group">
                  <CheckCircle className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-white font-semibold">
                      Priority Support
                    </div>
                    <div className="text-green-300 text-sm">24/7 Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Enhanced Billing */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-600 rounded-xl p-6 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="relative">
                  <CreditCard className="w-7 h-7 text-blue-400 drop-shadow-lg" />
                  <div className="absolute inset-0 w-7 h-7 bg-blue-400 rounded opacity-20 blur animate-pulse"></div>
                </div>
                Billing Control
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-800/40 rounded-lg">
                  <span className="text-gray-300 font-medium">
                    Current Plan
                  </span>
                  <span className="text-white font-bold">{userPlan.name}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800/40 rounded-lg">
                  <span className="text-gray-300 font-medium">
                    Monthly Cost
                  </span>
                  <span className="text-white font-bold">{userPlan.price}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800/40 rounded-lg">
                  <span className="text-gray-300 font-medium">
                    Next Billing
                  </span>
                  <span className="text-white font-bold">Feb 15, 2024</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <span className="text-green-300 font-medium">Status</span>
                  <span className="text-green-400 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    ACTIVE
                  </span>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/30">
                    🔧 Manage Billing
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Upgrade Plan */}
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500 rounded-xl p-6 backdrop-blur-sm shadow-xl shadow-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="relative">
                  <ArrowUp className="w-7 h-7 text-purple-400 drop-shadow-lg" />
                  <div className="absolute inset-0 w-7 h-7 bg-purple-400 rounded opacity-20 blur animate-pulse"></div>
                </div>
                Upgrade Mission
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Ready for deeper space exploration? Upgrade to{" "}
                <span className="text-purple-300 font-semibold">
                  Venus Vanguard
                </span>{" "}
                for advanced mission capabilities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>🤖 AI Mission Assistant</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>📦 5,000kg Cargo Allowance</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>⚡ Priority Launch Slots</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>🌌 Deep Space Missions</span>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
                🚀 Upgrade to Venus Vanguard
              </button>
              <div className="mt-3 text-center">
                <span className="text-purple-300 text-sm font-semibold">
                  $149/mo • Advanced Explorer Package
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
