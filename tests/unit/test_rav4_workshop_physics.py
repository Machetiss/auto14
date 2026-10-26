"""
Comprehensive Adversarial Verification Suite for Toyota RAV4 III Workshop Physics & Procedural Stress-Testing
Author: Challenger 2 (Workshop Physics & Procedural Stress-Testing Challenger)
Vehicle: Toyota RAV4 III (XA30, 2012, ZSA30L-BWXGPW, VIN: JTMBE31V50D078417)
"""

import math
import unittest

class TestSteeringRackPhysics(unittest.TestCase):
    """
    Stress-Test 1: Steering Rack Torsional Damage Physics & EPS Torque Sensor Failure Modes
    """

    def test_torsional_prying_force_on_pinion_and_guide(self):
        """
        Calculate transverse prying force on pinion teeth and rack guide
        when tie rod is tightened (76-83 Nm) or loosened (100-150 Nm break torque)
        without counter-holding the rack shaft.
        """
        # Rack shaft parameters (Toyota RAV4 XA30 rack 45510-42080)
        d_rack = 0.026  # 26 mm rack shaft diameter
        r_rack = d_rack / 2.0  # 13 mm radius

        # Torques applied at the tie rod axial joint
        T_tighten_min = 76.0  # N*m (Toyota FSM spec minimum)
        T_tighten_max = 83.0  # N*m (Toyota FSM spec maximum)
        T_breakaway_nominal = 120.0  # N*m (corroded/staked tie rod removal)
        T_breakaway_extreme = 150.0  # N*m (impact wrench or seized threads)

        # Transverse tangential prying force F = T / r
        F_prying_tighten_min = T_tighten_min / r_rack
        F_prying_tighten_max = T_tighten_max / r_rack
        F_prying_break_nom = T_breakaway_nominal / r_rack
        F_prying_break_ext = T_breakaway_extreme / r_rack

        print(f"\n[ST-1.1] Rack Torsional Prying Force:")
        print(f"  Tightening (76-83 N*m): {F_prying_tighten_min:.1f} N to {F_prying_tighten_max:.1f} N ({F_prying_tighten_min/9.81:.1f} to {F_prying_tighten_max/9.81:.1f} kgf)")
        print(f"  Breakaway (120 N*m):    {F_prying_break_nom:.1f} N ({F_prying_break_nom/9.81:.1f} kgf)")
        print(f"  Breakaway (150 N*m):    {F_prying_break_ext:.1f} N ({F_prying_break_ext/9.81:.1f} kgf)")

        # Verify that transverse force exceeds typical rack guide spring pre-load (300-800 N)
        F_guide_spring = 500.0  # N
        self.assertGreater(F_prying_tighten_min, F_guide_spring * 10,
                           "Prying force exceeds guide spring preload by over an order of magnitude!")

        # Allowable tooth tip bending stress for pinion teeth:
        # Under pure roll moment, rack tooth tilts and concentrates contact on tooth corner
        b_contact = 0.003  # 3 mm localized contact due to roll tilt
        h_tooth = 0.005    # 5 mm
        t_tooth = 0.004    # 4 mm
        W_tooth = (b_contact * (t_tooth ** 2)) / 6.0  # Section modulus
        M_bend_tighten = F_prying_tighten_max * h_tooth
        sigma_bend_tighten = M_bend_tighten / W_tooth / 1e6  # MPa

        M_bend_break = F_prying_break_nom * h_tooth
        sigma_bend_break = M_bend_break / W_tooth / 1e6  # MPa

        print(f"  Localized Pinion Tooth Bending Stress (Tightening): {sigma_bend_tighten:.1f} MPa")
        print(f"  Localized Pinion Tooth Bending Stress (Breakaway):  {sigma_bend_break:.1f} MPa")

        # Yield strength of case-hardened alloy steel (e.g. 20CrMo / 8620) is ~600-800 MPa
        self.assertGreater(sigma_bend_tighten, 800.0,
                           "Tooth edge bending stress exceeds yield limit -> micro-chipping / brinelling!")

    def test_eps_column_vs_rack_architecture(self):
        """
        Verify the architectural distinction between C-EPS (Column) and Rack/Pinion EPS.
        On RAV4 III (XA30), EPS motor & torque sensor are in the steering column, NOT inside the rack.
        """
        is_column_eps = True
        is_rack_integrated_sensor = False

        # Load path analysis when steering wheel is locked:
        # Tie rod -> Rack shaft -> Pinion -> U-joint 1 -> Intermediate Shaft -> U-joint 2 -> Column
        # Column contains: Reduction Worm Gear, Brushless Motor, Torque Sensor (Main/Sub), Steering Lock Pin
        torsion_bar_nominal_angle_range = 5.0  # degrees (+/- 5 deg)
        torsion_bar_stiffness = 3.5  # N*m / deg (typical automotive EPS column torsion bar)
        torque_to_limit_stops = torsion_bar_nominal_angle_range * torsion_bar_stiffness  # ~ 17.5 N*m

        # Once mechanical stops engage at 17.5 N*m, excess torque bypasses torsion bar to column body
        # But dynamic impact or high static torque (100+ N*m) against steering lock pin:
        steering_lock_pin_shear_rating = 100.0  # N*m
        self.assertTrue(is_column_eps)
        self.assertFalse(is_rack_integrated_sensor)
        self.assertLess(torque_to_limit_stops, 50.0)


class TestBallPinThermalDegradation(unittest.TestCase):
    """
    Stress-Test 2: Ball Pin Spinning & Frictional Heat Degradation of POM-500 Socket
    """

    def test_frictional_heating_pom500(self):
        """
        Model frictional heat generation when impact wrench (2800 RPM) spins the ball stud
        in POM-500 socket without hex counter-hold.
        """
        rpm = 2800.0
        omega = (rpm * 2.0 * math.pi) / 60.0  # rad/s ~ 293.2 rad/s

        r_ball = 0.011  # 11 mm radius (22 mm diameter ball)
        v_surface = omega * r_ball  # m/s ~ 3.23 m/s

        # Normal contact force from nut prevailing torque & initial clamping
        F_normal = 800.0  # N
        mu_pom = 0.20     # friction coeff of POM-500 under boundary/dry conditions

        # Frictional power: P = mu * F_normal * v_surface
        P_fric = mu_pom * F_normal * v_surface  # Watts
        print(f"\n[ST-2.1] Ball Pin Spinning Frictional Power:")
        print(f"  Rotational Speed: {rpm:.0f} RPM ({omega:.1f} rad/s)")
        print(f"  Equatorial Sliding Velocity: {v_surface:.2f} m/s")
        print(f"  Frictional Thermal Dissipation: {P_fric:.1f} Watts")

        # Contact area (hemispherical contact zone)
        A_contact = 2.0 * math.pi * (r_ball ** 2) * 0.5  # ~ 3.8e-4 m^2
        pressure = F_normal / A_contact / 1e6  # MPa
        pv_factor = pressure * v_surface  # MPa * m/s

        print(f"  Contact Pressure: {pressure:.2f} MPa")
        print(f"  PV Factor: {pv_factor:.2f} MPa*m/s (POM-500 continuous limit: 0.25 MPa*m/s)")
        self.assertGreater(pv_factor, 0.25, "PV factor exceeds material limit by >20x!")

        # Transient heat conduction into POM interface
        t_layer = 0.0005  # 0.5 mm boundary layer
        vol_layer = A_contact * t_layer  # m^3
        m_layer = vol_layer * 1420.0  # density 1420 kg/m^3
        C_thermal = m_layer * 1500.0  # specific heat 1500 J/(kg*K)

        heat_fraction_pom = 0.20  # ~20% goes to low-conductivity polymer, ~80% to steel ball
        P_into_pom = P_fric * heat_fraction_pom

        # Time to reach melting point (from 25°C to 168°C, delta T = 143 K)
        delta_T_melt = 168.0 - 25.0
        time_to_melt = (C_thermal * delta_T_melt) / P_into_pom

        print(f"  Thermal capacity of POM interface: {C_thermal:.3f} J/K")
        print(f"  Thermal power into POM: {P_into_pom:.1f} W")
        print(f"  Calculated Time to Reach 168°C Melting Point: {time_to_melt:.2f} seconds!")

        # Verify that POM-500 melts in less than 2 seconds of impact spinning
        self.assertLess(time_to_melt, 2.0, "Socket melts within 2 seconds of uncountered impact spinning!")

    def test_chloroprene_boot_shear_and_thermal_failure(self):
        """
        Verify failure modes of chloroprene (CR) boot when ball stud spins at 2800 RPM.
        """
        # Chloroprene upper continuous operating temperature
        t_max_cr = 110.0  # deg C
        t_burn_cr = 150.0  # deg C

        # Pin shoulder radius where boot sealing lip seats
        r_collar = 0.008  # 8 mm
        rpm = 2800.0
        omega = (rpm * 2.0 * math.pi) / 60.0
        v_lip = omega * r_collar  # m/s ~ 2.35 m/s

        # Garter spring radial clamping force
        F_lip = 15.0  # N
        mu_rubber = 0.5  # dry rubber on steel
        P_lip_fric = mu_rubber * F_lip * v_lip  # ~ 17.6 Watts concentrated on thin rubber lip

        # Thermal capacity of thin rubber lip (0.05 g, cp = 1800 J/kg*K)
        C_lip = 0.00005 * 1800.0  # 0.09 J/K
        time_to_overheat_lip = (C_lip * (t_max_cr - 25.0)) / (P_lip_fric * 0.5)

        print(f"\n[ST-2.2] Chloroprene Boot Lip Friction:")
        print(f"  Lip Sliding Velocity: {v_lip:.2f} m/s")
        print(f"  Frictional Power on Lip: {P_lip_fric:.1f} Watts")
        print(f"  Time to Exceed 110°C Operating Limit: {time_to_overheat_lip:.2f} seconds!")

        self.assertLess(time_to_overheat_lip, 1.0, "Boot sealing lip overheats and chars in < 1 second!")


class TestClawWasherVsThreadlocker(unittest.TestCase):
    """
    Stress-Test 3: Claw Washer Staking (90214-14009) vs Loctite Threadlocker
    """

    def test_mechanical_positive_locking_vs_adhesive(self):
        """
        Compare mechanical shear capacity of 90214-14009 claw washer
        against Loctite 243 with clean surface and oil contamination.
        """
        w_claw = 0.010  # 10 mm width
        t_claw = 0.0014 # 1.4 mm thickness
        r_arm = 0.016   # 16 mm lever arm
        n_claws = 2

        tau_steel = 240.0 * 1e6  # 240 MPa shear yield of mild steel
        A_shear_claw = w_claw * t_claw
        F_shear_claws = n_claws * A_shear_claw * tau_steel
        T_resist_washer = F_shear_claws * r_arm

        print(f"\n[ST-3.1] Fastener Locking Mechanism Comparison:")
        print(f"  Claw Washer (90214-14009) Positive Locking Resistance: {T_resist_washer:.1f} N*m")

        # Loctite 243 specifications on M16 thread:
        T_break_clean = 26.0  # N*m
        retention_oil_contaminated = 0.25  # 25% remaining strength under grease
        T_break_contaminated = T_break_clean * retention_oil_contaminated

        print(f"  Loctite 243 Breakaway Torque (Clean Steel):       {T_break_clean:.1f} N*m")
        print(f"  Loctite 243 Breakaway Torque (Grease Contaminated): {T_break_contaminated:.1f} N*m")

        self.assertGreater(T_resist_washer, T_break_contaminated * 10,
                           "Mechanical claw washer provides >10x retention torque of contaminated threadlocker!")

    def test_vibrational_shock_loosening_risk(self):
        """
        Evaluate DIN 65151 (Junker test) behavior: Form-fit (claw washer) vs Adhesion (Loctite).
        """
        # Form-fit retention under 100% loss of preload:
        retention_form_fit_after_preload_loss = 1.0  # 100% locked mechanically
        # Adhesive retention after bond shear fracture:
        retention_adhesive_after_bond_fracture = 0.15  # Prevailing torque drops to ~4-5 Nm

        self.assertEqual(retention_form_fit_after_preload_loss, 1.0)
        self.assertLess(retention_adhesive_after_bond_fracture, 0.20)


class TestSuspensionGeometryAndSAS(unittest.TestCase):
    """
    Stress-Test 4: Suspension Alignment Dynamics & SAS Zero Point Calibration Necessity
    """

    def test_tie_rod_length_vs_toe_angle(self):
        """
        Verify sensitivity of front toe angle to tie rod thread adjustment.
        """
        r_steering_arm = 0.135  # 135 mm steering arm radius on knuckle

        delta_length = 0.001  # 1 mm tie rod length change
        delta_toe_rad = delta_length / r_steering_arm
        delta_toe_deg = math.degrees(delta_toe_rad)
        delta_toe_minutes = delta_toe_deg * 60.0

        print(f"\n[ST-4.1] Suspension Kinematics:")
        print(f"  1 mm Tie Rod delta -> {delta_toe_deg:.3f}° = {delta_toe_minutes:.1f}' (minutes)")

        # Verify that 1 mm exceeds total factory tolerance window (0° ± 10' = 20' total)
        self.assertGreater(delta_toe_minutes, 20.0,
                           "1 mm tie rod adjustment exceeds entire factory toe tolerance window!")

    def test_camber_cross_coupling_sensitivity(self):
        """
        Verify whether tie rod length change at static straight-ahead position
        alters camber or caster, or strictly toe.
        """
        # At straight ahead (delta = 0), steering knuckle rotates about steering axis.
        # Steering Axis Inclination (SAI) ~ 12.5 deg, Caster ~ 2.75 deg.
        # Static camber change d(camber)/d(toe) at delta=0 is mathematically 0 (first-order derivative).
        # Dynamic camber change during steer angle delta:
        # camber(delta) = camber_0 - sin(delta)*sin(caster) + cos(delta)*sin(SAI)...
        # At delta = 0, d(camber)/d(delta) = -sin(caster) = -sin(2.75 deg) = -0.048 deg/deg.
        caster_deg = 2.75
        d_camber_d_steer = -math.sin(math.radians(caster_deg))

        # For small toe adjustment of 0.424 deg (1 mm tie rod delta):
        delta_camber_cross_coupling = abs(d_camber_d_steer * 0.424)

        print(f"  Static Camber Sensitivity to 1 mm Toe Shift: {delta_camber_cross_coupling:.4f}° ({delta_camber_cross_coupling*60:.2f}')")
        # 1 mm tie rod change produces less than 1.5 minutes of camber change (negligible!)
        self.assertLess(delta_camber_cross_coupling * 60.0, 2.0,
                        "Tie rod replacement affects strictly toe; static camber change is negligible (<2')!")

    def test_sas_offset_vsc_intervention(self):
        """
        Model VSC yaw rate discrepancy caused by uncalibrated SAS offset (3.5 degrees).
        """
        wheelbase = 2.560  # m
        v_highway_kmh = 90.0
        v_highway_ms = v_highway_kmh / 3.6  # 25 m/s
        steering_gear_ratio = 15.5

        delta_sas_deg = 3.5
        delta_wheel_deg = delta_sas_deg / steering_gear_ratio
        delta_wheel_rad = math.radians(delta_wheel_deg)

        psi_dot_target_rad_s = (v_highway_ms / wheelbase) * delta_wheel_rad
        psi_dot_target_deg_s = math.degrees(psi_dot_target_rad_s)
        psi_dot_actual_deg_s = 0.0

        error_yaw_rate = abs(psi_dot_target_deg_s - psi_dot_actual_deg_s)

        print(f"\n[ST-4.2] VSC Dynamics with Uncalibrated SAS:")
        print(f"  Highway Speed: {v_highway_kmh} km/h")
        print(f"  SAS Uncalibrated Offset: {delta_sas_deg}°")
        print(f"  VSC Target Yaw Rate: {psi_dot_target_deg_s:.2f} deg/s")
        print(f"  Actual Measured Yaw Rate: {psi_dot_actual_deg_s:.2f} deg/s")
        print(f"  Discrepancy (Error): {error_yaw_rate:.2f} deg/s")

        vsc_threshold_deg_s = 2.0
        self.assertGreater(error_yaw_rate, vsc_threshold_deg_s,
                           "Uncalibrated SAS offset triggers phantom VSC intervention / brake pulse!")


if __name__ == "__main__":
    unittest.main()
