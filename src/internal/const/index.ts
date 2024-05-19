import { PhosphorusRemoval } from '@core/model/entities/phosphorous-removal.entity';
import { TemperatureAdjustment } from '@core/model/entities/temperature-adjustment.entity';
import { AerationSystemType } from '@core/model/entities/aeration-system-analysis.entity';
import { ModelType } from '@core/model/entities/model.entity';

/**
 * @description - clean water do saturation at stp `mg/l`
 */
export const CLEAN_WATER_DO_SATURATION_AT_STP = 9.09;

/**
 * @description - standard atmospheric pressure in `psi`
 */
export const STANDARD_ATMOSPHERIC_PRESSURE = 14.7;

/**
 * @description - standard vapour pressure `psi`
 */
export const STANDARD_VAPOUR_PRESSURE_OF_WATER_AT_STP = 0.34;

export const AUTOTROPH_HALF_VELOCITY_CONSTANT = 1.0;

export const PhosphorusRemovalParamSecondaryValConstants: Pick<
  PhosphorusRemoval,
  | 'ratio_of_influent_cod_bod5'
  | 'influent_do_concentration'
  | 'ras_do_concentration'
  | 'influent_unbiodegradable_soluble_cod_fraction'
  | 'influent_unbiodegradable_particulate_cod_fraction'
  | 'readily_biodegradable_cod_fraction'
  | 'cod_to_vss_ratio'
  | 'heterotrophic_bacteria_decay_coefficient'
  | 'heterotrophic_organisms_yield_coefficient'
  | 'unbiodegradable_vss_phosphorus_content'
  | 'active_mass_unbiodegradable_fraction'
> = {
  ratio_of_influent_cod_bod5: 2,
  influent_do_concentration: 1,
  ras_do_concentration: 1,
  influent_unbiodegradable_soluble_cod_fraction: 0.05,
  influent_unbiodegradable_particulate_cod_fraction: 0.13,
  readily_biodegradable_cod_fraction: 0.25,
  cod_to_vss_ratio: 1.48,
  heterotrophic_bacteria_decay_coefficient: 0.24,
  heterotrophic_organisms_yield_coefficient: 0.45,
  unbiodegradable_vss_phosphorus_content: 0.015,
  active_mass_unbiodegradable_fraction: 0.2,
};

export const ThetaValueParamConstants: Omit<TemperatureAdjustment, 'model_id'> =
  {
    temperature_heterotroph_tem_adjustment_mumax: 1.02,
    temperature_heterotroph_temp_adjustment_ks: 1.02,
    temperature_heterotroph_temp_adjustment_ke: 1.02,
    fermentation_first_anoxic_dnp_temp_adjustment: 1.06,
    second_anoxic_dnp_tem_adjustment: 1.03,
    bht_tem_adjustment: 1.03,
  };

export const ModelCharacteristicTableRows = {
  alarms: 'Alarms',
  aeration_system_analysis: (type: AerationSystemType) => {
    if (type === AerationSystemType.MECHANICAL) {
      return 'Mechanical Aeration System Analysis';
    } else if (type === AerationSystemType.DIFFUSION) {
      return 'Diffused Aeration System Analysis';
    }
  },
  alkalinity_balance: 'Alkalinity Balance',
  autotroph_coefficient_performance: 'Autotroph Coefficients & Performance',
  bacterial_analysis: 'HRT, SRT,Yield, Effluent CBOD5, & Effluent Ammonia',
  case_handling: 'Case Handling',
  clarifier_loadings: 'Clarifier Loadings',
  constants: 'Constants',
  denitrification_potentials: 'Denitrification Potentials',
  fermentation_and_anoxic_basin_mixing_analysis: (model_type: ModelType) => {
    const undergoesFermentation = [
      ModelType.STAGE_THREE,
      ModelType.STAGE_FIVE,
    ].includes(model_type);

    if (undergoesFermentation) {
      return 'Fermentation & Anoxic Basin Mixing Analysis';
    }

    return 'Anoxic Basin Mixing Analysis';
  },
  final_nitrogen_balance: 'Final Nitrogen Balance',
  heterotroph_coefficient_performance: '--',
  influent: 'Flows & Influent Characteristics',
  nitrate_removal: 'Nitrate Removal',
  nitrification_analysis: 'Nitrification Analysis',
  oxygen_requirements: 'Oxygen Requirements',
  phosphorous_check: 'Phosphorus Check',
  phosphorous_removal: 'Phosphorus Check',
  process_input_parameters: 'Process Input Parameters',
  real_models: 'Real Models',
  temperature_adjustments: 'Temperature Adjustments',
};

export const CharacteristicsTableData = {
  influent: {
    flow: {
      name: 'Flow',
      us_unit: 'MG/D',
      si_unit: 'M3/d',
    },
    cbods_concentration: {
      name: 'Influent CBOD5 Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    tss_concentration: {
      name: 'Influent TSS Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    tkn_concentration: {
      name: 'Influent TKN Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    tp_concentration: {
      name: 'Influent TP Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    temperature: {
      name: 'Influent Temperature',
      us_unit: 'C',
      si_unit: 'C',
    },
  },

  process_input_parameters: {
    fermentation_volume: {
      name: 'Fermentation Volume',
      us_unit: 'MG',
      si_unit: 'M3',
    },
    first_anoxic_volume: {
      name: 'First Anoxic Volume',
      us_unit: 'MG',
      si_unit: 'M3',
    },
    aerobic_volume: {
      name: 'Aerobic Volume',
      us_unit: 'MG',
      si_unit: 'M3',
    },
    second_anoxic_volume: {
      name: 'Second Anoxic Volume',
      us_unit: 'MG',
      si_unit: 'M3',
    },
    re_aeration_volume: {
      name: 'Reaeration Volume',
      us_unit: 'MG',
      si_unit: 'M3',
    },
    mlss: {
      name: 'MLSS',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    mixed_liquor_volatile_suspended_solids_percent: {
      name: 'Mixed Liquor Volatile Suspended Solids Percent',
      si_unit: 'Percent',
      us_unit: 'Percent',
    },
    ras_tss_concentration: {
      name: 'RAS TSS Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    internal_recycle_flow_as_percentage_of_influent_flow: {
      name: 'Internal Recycle Flow As Percent Of Influent Flow',
      us_unit: '%',
      si_unit: '%',
    },
    internal_recycle_flow: {
      name: 'Internal Recycle Flow',
      us_unit: 'MGD',
      si_unit: 'M3/d',
    },
    refractory_organic_nitrogen_concentration: {
      name: 'Refractory Organic Nitrogen Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    nitrogen_content_of_was_solids: {
      name: 'Nitrogen Content Of WAS Solids',
      us_unit: '%',
      si_unit: '%',
    },
  },

  bacterial_analysis: {
    ras_as_percent_of_influent_flow: {
      name: 'RAS As Percent Of Influent Flow',
      us_unit: 'Percent',
      si_unit: 'Percent',
    },
    ras_flow_rate: {
      name: 'RAS Flow Rate',
      us_unit: 'MGD',
      si_unit: 'M3/d',
    },
    fermentation_hrt: {
      name: 'Fermentation HRT',
      us_unit: 'Hours',
      si_unit: 'Hours',
    },
    first_anoxic_hrt: {
      name: 'First Anoxic HRT',
      us_unit: 'Hours',
      si_unit: 'Hours',
    },
    aerobic_hrt: {
      name: 'Aerobic HRT',
      us_unit: 'Hours',
      si_unit: 'Hours',
    },
    second_anoxic_hrt: {
      name: 'Second Anoxic HRT',
      us_unit: 'Hours',
      si_unit: 'Hours',
    },
    re_aeration_hrt: {
      name: 'Reaeration HRT',
      us_unit: 'Hours',
      si_unit: 'Hours',
    },
    total_hrt: {
      name: 'Total HRT',
      us_unit: 'Hours',
      si_unit: 'Hours',
    },
    aerobic_srt: {
      name: 'Aerobic SRT',
      us_unit: 'Days',
      si_unit: 'Days',
    },
    total_system_srt: {
      name: 'Total System SRT',
      us_unit: 'Days',
      si_unit: 'Days',
    },
    yield_coefficient: {
      name: 'Yield Coefficient',
      us_unit: '--',
      si_unit: '--',
    },
    solids_production: {
      name: 'Solids Production',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    was_flow: {
      name: 'WAS Flow',
      us_unit: 'GPD',
      si_unit: 'L/D',
    },
    effluent_soluble_cbod5_concentration: {
      name: 'Effluent Soluble CBOD5 Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    effluent_ammonia_concentration: {
      name: 'Effluent Ammonia Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
  },

  nitrification_analysis: {
    influent_tkn: {
      name: 'Influent TKN',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    min_cell_synthesis_nitrogen_required: {
      name: 'Less Nitrogen Required For Cell Synthesis',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    min_effluent_ammonia: {
      name: 'Less Effluent Ammonia',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    min_refractory_organic_nitrogen: {
      name: 'Less Refractory Organic Nitrogen',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    tkn_to_be_nitrified: {
      name: 'TKN To Be Nitrified',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
  },

  denitrification_potentials: {
    fermentation_zone_denitrification_potential: {
      name: 'Fermentation Zone Denitrification Potential',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    first_anoxic_zone_denitrification_potential: {
      name: 'First Anoxic Zone Denitrification Potential',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    second_anoxic_zone_denitrification_potential: {
      name: 'Second Anoxic Zone Denitrification Potential',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    total_denitrification_potential: {
      name: 'Total Denitrification Potential',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
  },

  nitrate_removal: {
    fermentation_zone_nitrate_removal: {
      name: 'Fermentation Zone Nitrate Removal',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    first_anoxic_zone_nitrate_removal: {
      name: 'First Anoxic Zone Nitrate Removal',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    second_anoxic_zone_nitrate_removal: {
      name: 'Second Anoxic Zone Nitrate Removal',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    total_nitrate_removal: {
      name: 'Total Nitrate Removal',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
  },

  final_nitrogen_balance: {
    influent_tkn: {
      name: 'Influent TKN',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    min_cell_synthesis_nitrogen_required: {
      name: 'Less Nitrogen Required For Cell Synthesis',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    min_effluent_ammonia: {
      name: 'Less Effluent Ammonia',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    min_refractory_organic_nitrogen: {
      name: 'Less Refractory Organic Nitrogen',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    tkn_converted_to_nitrate: {
      name: 'TKN Converted To Nitrate',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    min_nitrate_removed: {
      name: 'Less Nitrate Removed',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    effluent_nitrate: {
      name: 'Effluent Nitrate',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    effluent_tn: {
      name: 'Effluent TN',
      us_unit: 'PPD',
      si_unit: 'KG/D',
    },
    effluent_ammonia_concentration: {
      name: 'Effluent Ammonia Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    refractory_organic_nitrogen_concentration: {
      name: 'Refractory Organic Nitrogen Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    effluent_tkn_concentration: {
      name: 'Effluent TKN Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    effluent_nitrate_concentration: {
      name: 'Effluent Nitrate Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
    effluent_tn_concentration: {
      name: 'Effluent TN Concentration',
      us_unit: 'mg/l',
      si_unit: 'mg/L',
    },
  },

  fermentation_and_anoxic_basin_mixing_analysis: {
    number_of_fermentation_mixers: {
      name: 'Number Of Fermentation Mixers',
      si_unit: 'Each',
      us_unit: 'Each',
    },
    fermentation_mixer_horsepower: {
      name: 'Fermentation Mixer Horsepower, Each',
      si_unit: 'kW',
      us_unit: 'HP',
    },
    fermentation_basin_mixing_intensity: {
      name: 'Fermentation Basin Mixing Intensity',
      si_unit: 'kW/M3',
      us_unit: 'HP/MG',
    },
    number_of_first_anoxic_mixers: {
      name: 'Number Of First Anoxic Mixers',
      si_unit: 'Each',
      us_unit: 'Each',
    },
    first_anoxic_mixer_horsepower: {
      name: 'First Anoxic Mixer Horsepower, Each',
      si_unit: 'kW',
      us_unit: 'HP',
    },
    first_anoxic_basin_mixing_intensity: {
      name: 'First Anoxic Basin Mixing Intensity',
      si_unit: 'kW/M3',
      us_unit: 'HP/MG',
    },
    number_of_second_anoxic_mixers: {
      name: 'Number Of Second Anoxic Mixers',
      si_unit: 'Each',
      us_unit: 'Each',
    },
    second_anoxic_mixer_horsepower: {
      name: 'Second Anoxic Mixer Horsepower, Each',
      si_unit: 'kW',
      us_unit: 'HP',
    },
    second_anoxic_basin_mixing_intensity: {
      name: 'Second Anoxic Basin Mixing Intensity',
      si_unit: 'kW/M3',
      us_unit: 'HP/MG',
    },
  },

  alkalinity_balance: {
    nitrification_alkalinity_coefficient: {
      name: 'Alkalinity Coefficient For Nitrification',
      si_unit: '--',
      us_unit: '--',
    },
    denitrification_alkalinity_coefficient: {
      name: 'Alkalinity Coefficient For Denitrification',
      si_unit: '--',
      us_unit: '--',
    },
    nitrification_alkalinity_required: {
      name: 'Alkalinity Required For Nitrification',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    min_denitrification_alkalinity_credit: {
      name: 'Less Alkalinity Credit For Denitrification',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    net_alkalinity_required: {
      name: 'Net Alkalinity Required',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
  },

  oxygen_requirements: {
    influent_cbod5: {
      name: 'Influent CBOD5',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    effluent_cbod5: {
      name: 'Effluent CBOD5',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    cbod5_removed: {
      name: 'CBOD5 Removed',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    cbod5_removal_oxygen_coefficient: {
      name: 'Oxygen Coefficient For CBOD5 Removal',
      si_unit: '--',
      us_unit: '--',
    },
    cbod5_removal_oxygen_required: {
      name: 'Oxygen Required For CBOD Removal',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    nitrification_oxygen_coefficient: {
      name: 'Oxygen Coefficient For Nitrification',
      si_unit: '--',
      us_unit: '--',
    },
    tkn_to_nitrate_conversion: {
      name: 'TKN Converted To Nitrate',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    nitrification_oxygen_required: {
      name: 'Oxygen Required For Nitrification',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    denitrification_credit_oxygen_coefficient: {
      name: 'Oxygen Coefficient For Denitrification Credit',
      si_unit: '--',
      us_unit: '--',
    },
    denitrification_credit: {
      name: 'Denitrification Credit',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
    net_oxygen_required: {
      name: 'Net Oxygen Requirement',
      si_unit: 'KG/D',
      us_unit: 'PPD',
    },
  },

  clarifier_loadings: {
    number_of_units: {
      name: 'Number Of Units',
      si_unit: 'Each',
      us_unit: 'Each',
    },
    clarifier_diameter: {
      name: 'Clarifier Diameter',
      si_unit: 'm',
      us_unit: 'Feet',
    },
    surface_area: {
      name: 'Surface Area',
      si_unit: 'm²',
      us_unit: 'SF',
    },
    weir_length: {
      name: 'Weir Length',
      si_unit: 'm',
      us_unit: 'Feet',
    },
    weir_diameter: {
      name: 'Weir Diameter',
      si_unit: 'm',
      us_unit: 'Feet',
    },
    ras_flow: {
      name: 'RAS Flow',
      si_unit: 'm³/D',
      us_unit: 'MGD',
    },
    overflow_rate: {
      name: 'Overflow Rate',
      si_unit: 'm/D',
      us_unit: 'GPD/SF',
    },
    weir_loading: {
      name: 'Weir Loading',
      si_unit: 'm³/mD',
      us_unit: 'GPD/LF',
    },
    solids_loading: {
      name: 'Solids Loading',
      si_unit: 'Kg/D/m²',
      us_unit: 'PPD/SF',
    },
  },

  aeration_system_analysis: {
    actual_oxygenated_rate_aor: {
      name: 'Actual Oxygenation Rate (AOR)',
      si_unit: 'kg/d',
      us_unit: 'kg/d',
    },
    aerobic_srt: {
      name: 'Aerobic SRT',
      si_unit: 'Days',
      us_unit: 'Days',
    },
    alpha: {
      name: 'Alpha',
      si_unit: '--',
      us_unit: '--',
    },
    beta: {
      name: 'Beta',
      si_unit: '--',
      us_unit: '--',
    },
    clean_water_do_saturation_at_stp: {
      name: 'DO Saturation In Clean Water @ 20 Deg. C & 100% RH',
      si_unit: 'mg/l',
      us_unit: 'mg/l',
    },
    clean_water_do_saturation_at_specified_temperature_100rh: {
      name: 'DO Saturation In Clean Water @ Specified Temp. & 100% RH',
      si_unit: 'mg/l',
      us_unit: 'mg/l',
    },
    tau: {
      name: 'Tau',
      si_unit: '--',
      us_unit: '--',
    },
    standard_atmospheric_pressure: {
      name: 'Standard Atmospheric Pressure',
      si_unit: 'Pa',
      us_unit: 'psi',
    },
    barometric_pressure: {
      name: 'Barometric Pressure',
      si_unit: 'Pa',
      us_unit: 'psi',
    },
    standard_vapor_pressure_of_water_at_stp: {
      name: 'Saturated Vapor Pressure of Water @20 Deg. C',
      si_unit: 'Pa',
      us_unit: 'psi',
    },
    standard_vapor_pressure_of_water_at_specified_temperature: {
      name: 'Saturated Vapor Pressure of Water @Specified Temperature',
      si_unit: 'Pa',
      us_unit: 'psi',
    },
    effective_saturation_depth: {
      name: 'Effective Saturation Depth',
      si_unit: 'Meters',
      us_unit: 'Feet',
    },
    omega: {
      name: 'Omega',
      si_unit: '--',
      us_unit: '--',
    },
    corrected_clean_water_do_saturation_at_stp: {
      name: 'Corrected DO Saturation In Clean Water @ 20 Deg. C & 100% RH',
      si_unit: 'mg/l',
      us_unit: 'mg/l',
    },
    operating_do: {
      name: 'Operating DO',
      si_unit: 'mg/l',
      us_unit: 'mg/l',
    },
    aor_sor: {
      name: 'AOR/SOR',
      si_unit: '--',
      us_unit: '--',
    },
    aerator_unit_sor: {
      name: 'Aerator Unit SOR',
      si_unit: 'kg/kW-hr',
      us_unit: 'Lbs./HP-Hr.',
    },
    aeration_unit_aor: {
      name: 'Aerator Unit AOR',
      si_unit: 'kg/kW-hr',
      us_unit: 'Lbs./HP-Hr.',
    },
    total_horsepower_required: {
      name: 'Total Horsepower Required',
      si_unit: 'W',
      us_unit: 'HP',
    },
    standard_oxygen_transfer_efficiency: {
      name: 'Standard Oxygen Transfer Efficiency',
      si_unit: 'Percent',
      us_unit: 'Percent',
    },
    field_oxygen_transfer_efficiency: {
      name: 'Field Oxygen Transfer Efficiency',
      si_unit: 'Percent',
      us_unit: 'Percent',
    },
    air_flow_required_for_biological_process: {
      name: 'Air Flow Required  For Biological Process',
      si_unit: 'm3/HR',
      us_unit: 'SCFM',
    },
  },

  case_handling: {
    nitrate_effluent_case_4_thru_6: {
      name: 'Nitrate Effluent Cases 4 thru 6',
      si_unit: '--',
      us_unit: '--',
    },
    nitrate_effluent_case_3: {
      name: 'Nitrate Effluent Case 3',
      si_unit: '--',
      us_unit: '--',
    },
    nitrate_effluent_case_2: {
      name: 'Nitrate Effluent Case 2',
      si_unit: '--',
      us_unit: '--',
    },
    nitrate_effluent_case_1: {
      name: 'Nitrate Effluent Case 1',
      si_unit: '--',
      us_unit: '--',
    },
    effluent_nitrate_concentration: {
      name: 'Effluent Nitrate Concentration',
      si_unit: 'mg/l',
      us_unit: 'mg/l',
    },
    fermentation_zone_denitrification: {
      name: 'Fermentation Zone Denitrification',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    fermentation_zone_denitrification_potential: {
      name: 'Fermentation Zone Denitrification Potential',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    fermentation_zone_denitrification_actual: {
      name: 'Fermentation Zone Denitrification Actual',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    first_anoxic_zone_denitrification: {
      name: 'First Anoxic Zone Denrification',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    first_anoxic_zone_denitrification_potential: {
      name: 'First Anoxic Zone Denitrification Potential',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    first_anoxic_zone_denitrification_actual: {
      name: 'First Anoxic Zone Denitrification Actual',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    second_anoxic_zone_denitrification_actual: {
      name: 'Second Anoxic Zone Denitrification Acutal',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    nitrate_in_ras_return: {
      name: 'Nitrate in RAS Return',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    nitrate_in_internal_recycle: {
      name: 'Nitrate in Internal Recycle',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    fa_utilization: {
      name: 'FA Utilization',
      si_unit: 'Percent',
      us_unit: 'Percent',
    },
  },

  real_models: {
    flow: {
      name: 'Flow',
      si_unit: 'MG/D',
      us_unit: 'm^3/D',
    },
    influent_cbod5_concentration: {
      name: 'Influent CBOD5 Concentration',
      si_unit: 'mg/l',
      us_unit: 'mg/l',
    },
    aerobic_volume: {
      name: 'Aerobic Volume',
      si_unit: 'MG',
      us_unit: 'm^3/D',
    },
    mixed_liquor_volatile_suspended_solids: {
      name: 'Mixed Liquor Volatile Suspended Solids',
      si_unit: 'mg/l',
      us_unit: 'mg/l',
    },
    y0_real_model_yield: {
      name: 'Real Model Yield Y0',
      si_unit: '--',
      us_unit: '--',
    },
    y1_real_model_yield: {
      name: 'Real Model Yield Y1',
      si_unit: '--',
      us_unit: '--',
    },
    k_real_model: {
      name: 'Real Model K',
      si_unit: '1/day',
      us_unit: '1/day',
    },
  },

  heterotroph_coefficient_performance: {
    heterotroph_maximum_specific_growth_rate: {
      name: 'Heterotroph Maximum Specific Growth Rate',
      si_unit: '1/day',
      us_unit: '1/day',
    },
    heterotroph_half_velocity_constant: {
      name: 'Heterotroph Half-Velocity Constant',
      si_unit: 'mg/L',
      us_unit: 'mg/l',
    },
    heterotroph_endogenous_decay_coefficient: {
      name: 'Heterptroph Endogenous Decay Coefficient',
      si_unit: '1/day',
      us_unit: '1/day',
    },
    aerobic_srt: {
      name: 'Aerobic SRT',
      si_unit: 'Days',
      us_unit: 'Days',
    },
    a0_heterotroph: {
      name: 'Heterotroph A0',
      si_unit: '--',
      us_unit: '--',
    },
    b1_heterotroph: {
      name: 'Heterotroph B1',
      si_unit: '--',
      us_unit: '--',
    },
    b2_heterotroph: {
      name: 'Heterotroph B2',
      si_unit: '--',
      us_unit: '--',
    },
    c0_heterotroph: {
      name: 'Heterotroph C0',
      si_unit: '--',
      us_unit: '--',
    },
    error: {
      name: 'ERROR',
      si_unit: '--',
      us_unit: '--',
    },
    effluent_soluble_cbod5_concentration: {
      name: 'Effluent Soluble CBOD5 Concentration',
      si_unit: '--',
      us_unit: '--',
    },
    heterotroph_yield: {
      name: 'Heterotroph Yield',
      si_unit: '--',
      us_unit: '--',
    },
    heterotroph_minimum_srt1: {
      name: 'Heterotroph Minimum SRT1',
      si_unit: '--',
      us_unit: '--',
    },
    heterotroph_minimum_srt2: {
      name: 'Heterotroph Minimum SRT2',
      si_unit: '--',
      us_unit: '--',
    },
    heterotroph_aerobic_srt_per_minimum_srt1: {
      name: 'Heterotroph Aerobic SRT Over Minimum SRT1',
      si_unit: '--',
      us_unit: '--',
    },
  },

  autotroph_coefficient_performance: {
    autotroph_maximum_specific_growth_rate: {
      name: 'Autotroph Maximum Specific Growth Rate',
      si_unit: '1/day',
      us_unit: '1/day',
    },
    autotroph_half_velocity_constant: {
      name: 'Autotroph Half-Velocity Constant',
      si_unit: 'mg/L',
      us_unit: 'mg/l',
    },
    effluent_ammonia_per_equation: {
      name: 'Effluent Ammonia Per Equation',
      si_unit: '--',
      us_unit: '--',
    },
    influent_tkn: {
      name: 'Influent TKN',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    min_cell_synthesis_nitrogen_required: {
      name: 'Less Nitrogen Required For Cell Synthesis',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    min_refractory_organic_nitrogen: {
      name: 'Less Refractory Organic Nitrogen',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    maximum_ammonia_mass: {
      name: 'Maximum Ammonia Mass',
      si_unit: '--',
      us_unit: '--',
    },
    maximum_ammonia_concentration: {
      name: 'Maximum Ammonia Concentration',
      si_unit: '--',
      us_unit: '--',
    },
    effluent_ammonia_concentration: {
      name: 'Effluent Ammonia Concentration',
      si_unit: '--',
      us_unit: '--',
    },
    autotroph_minimum_srt1: {
      name: 'Autotroph Minimum SRT1',
      si_unit: '--',
      us_unit: '--',
    },
    autotroph_minimum_srt2: {
      name: 'Autotroph Minimum SRT2',
      si_unit: '--',
      us_unit: '--',
    },
    autotroph_aerobic_srt_per_minimum_srt1: {
      name: 'Autotroph Aerobic SRT Over Minimum SRT1',
      si_unit: '--',
      us_unit: '--',
    },
  },

  phosphorous_check: {
    influent_tp_mass: {
      name: 'Influent TP Mass',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    mixed_liquor_volatile_suspended_solids_percent: {
      name: 'Mixed Liquor Volatile Suspended Solids Percent',
      si_unit: 'Percent',
      us_unit: 'Percent',
    },
    phosphorus_content_of_was: {
      name: 'Phosphorus Content Of WAS',
      si_unit: 'Percent',
      us_unit: 'Percent',
    },
    phosphorus_in_cellular_mass: {
      name: 'Phosphorus in Cellular Mass',
      si_unit: 'PPD',
      us_unit: 'KG/D',
    },
    influent_tp_mass_to_cellular_mass_ratio: {
      name: 'Influent TP Mass to Cellular Mass Ratio',
      si_unit: '-',
      us_unit: '-',
    },
    phosphorus_removed_mass: {
      name: 'Phosphorus Removed Mass',
      si_unit: 'mg/l',
      us_unit: 'mg/l',
    },
  },

  phosphorous_removal: {
    flow: { name: 'Flow', si_unit: '--', us_unit: '--' },
    influent_cbod5_concentration: {
      name: 'Influent CBOD5 Concentration',
      si_unit: '--',
      us_unit: '--',
    },
    influent_tp_concentration: {
      name: 'Influent TP Concentration',
      si_unit: 'mg/L',
      us_unit: 'mg/L',
    },
    ras_flow_rate: { name: 'RAS Flow Rate', si_unit: '--', us_unit: '--' },
    total_system_srt: {
      name: 'Total System SRT',
      si_unit: '--',
      us_unit: '--',
    },
    effluent_nitrate_concentration: {
      name: 'Effluent Nitrate Concentration',
      si_unit: 'mg/L',
      us_unit: 'mg/L',
    },
    ratio_of_influent_cod_bod5: {
      name: 'Ratio of Influent COD:BOD5',
      si_unit: 'mg/mg',
      us_unit: 'mg/mg',
      comments: 'Per Ekama & Marais',
      symbol: 'COD:BOD5',
    },
    influent_do_concentration: {
      name: 'Influent DO Concentration',
      si_unit: 'mg/L',
      us_unit: 'mg/L',
      comments: 'Per WEF MOP No. 8',
      symbol: 'DOi',
    },
    ras_do_concentration: {
      name: 'RAS DO Concentration',
      si_unit: 'mg/L',
      us_unit: 'mg/L',
      comments: 'Per WEF MOP No. 8',
      symbol: 'DOr',
    },
    influent_unbiodegradable_soluble_cod_fraction: {
      name: 'Unbiodegradable Soluble COD Fraction in the Influent',
      si_unit: 'mg/mg',
      us_unit: 'mg/mg',
      comments: 'Per WEF MOP No. 8',
      symbol: 'fus',
    },
    influent_unbiodegradable_particulate_cod_fraction: {
      name: 'Unbiodegradable Particulate COD Fraction in the Influent',
      si_unit: 'mg/mg',
      us_unit: 'mg/mg',
      comments: 'Per WEF MOP No. 8',
      symbol: 'fup',
    },
    readily_biodegradable_cod_fraction: {
      name: 'Readily Biodegradable COD Fraction of Biodegradable COD',
      si_unit: 'mg/mg',
      us_unit: 'mg/mg',
      comments: 'Per WEF MOP No. 8',
      symbol: 'fbs',
    },
    cod_to_vss_ratio: {
      name: 'COD Ratio to VSS',
      si_unit: 'mg COD/mg VSS',
      us_unit: 'mg COD/mg VSS',
      comments: 'Per WEF MOP No. 8',
      symbol: 'fcv',
    },
    heterotrophic_bacteria_decay_coefficient: {
      name: 'Decay Coefficient for Heterotrophic Bacteria',
      si_unit: '1/day',
      us_unit: '1/day',
      comments: 'Per WEF MOP No. 8',
      symbol: 'bhT',
    },
    heterotrophic_organisms_yield_coefficient: {
      name: 'Yield Coefficient for Heterotrophic Organisms',
      si_unit: 'mg VSS/mg COD',
      us_unit: 'mg VSS/mg COD',
      comments: 'Per WEF MOP No. 8',
      symbol: 'Yh',
    },
    unbiodegradable_vss_phosphorus_content: {
      name: 'Phosphorus Content of Unbiodegradable VSS',
      si_unit: 'mg P/mg VSS',
      us_unit: 'mg P/mg VSS',
      comments: 'Per WEF MOP No. 8',
      symbol: 'fp',
    },
    active_mass_unbiodegradable_fraction: {
      name: 'Unbiodegradable Fraction of Active Mass',
      si_unit: 'mg/mgVSS',
      us_unit: 'mg/mgVSS',
      comments: 'Per WEF MOP No. 8',
      symbol: 'f',
    },
    influent_total_cod: {
      name: 'Influent Total COD',
      si_unit: '--',
      us_unit: '--',
    },
    influent_biodegradable_cod: {
      name: 'Influent Biodegradable COD',
      si_unit: '--',
      us_unit: '--',
    },
    ras_per_influent_flow: {
      name: 'RAS Over Influent Flow',
      si_unit: '--',
      us_unit: '--',
    },
    phosphorous_delta_sbs: {
      name: 'Phosphorous Delta Sbs',
      si_unit: '--',
      us_unit: '--',
    },
    phosphorous_sbsa: {
      name: 'Phosphorous Sbsa',
      si_unit: '--',
      us_unit: '--',
    },
    total_fermentation_zone_percentage: {
      name: 'Fermentation Zone Percent of Total',
      si_unit: '--',
      us_unit: '--',
    },
    pf_phosphorous: { name: 'Phosphorous Pf', si_unit: '--', us_unit: '--' },
    gamma_phosphorous: {
      name: 'Phosphorous Gamma',
      si_unit: '--',
      us_unit: '--',
    },
    a1_phosphorous: { name: 'Phosphorous A1', si_unit: '--', us_unit: '--' },
    b1_phosphorous: { name: 'Phosphorous B1', si_unit: '--', us_unit: '--' },
    c1_phosphorous: { name: 'Phosphorous C1', si_unit: '--', us_unit: '--' },
    potential_phosphorous_removal: {
      name: 'Phosphorus Removal Potential',
      si_unit: '--',
      us_unit: '--',
    },
    effluent_phosphorous_concentration: {
      name: 'Effluent Phosphorous Concentration',
      si_unit: 'mg/L',
      us_unit: 'mg/L',
    },
    actual_phosphorous_removal: {
      name: 'Phosphorus Removal Actual',
      si_unit: '--',
      us_unit: '--',
    },
    b2_no_excess_phosphorous_removal: {
      name: 'No Excess Phosphorous Removal B2',
      si_unit: '--',
      us_unit: '--',
    },
    actual_no_excess_phosphorous_removal: {
      name: 'No Excess Phosphorous Removal B2',
      si_unit: '--',
      us_unit: '--',
    },
  },

  temperature_adjustments: {
    temperature_heterotroph_tem_adjustment_mumax: {
      name: 'THETA for Adjusting Mumax for Temperature (Heterotrophs)',
      si_unit: '--',
      us_unit: '--',
      comments: 'Per Metcalf & Eddy, "Wastewater Engineering"',
    },
    temperature_heterotroph_temp_adjustment_ks: {
      name: 'THETA for Adjusting Ks for Temperature (Heterotrophs)',
      si_unit: '--',
      us_unit: '--',
      comments: 'Per Metcalf & Eddy, "Wastewater Engineering"',
    },
    temperature_heterotroph_temp_adjustment_ke: {
      name: 'THETA for Adjusting Ke for Temperature (Heterotrophs)',
      si_unit: '--',
      us_unit: '--',
      comments: 'Per Metcalf & Eddy, "Wastewater Engineering"',
    },
    fermentation_first_anoxic_dnp_temp_adjustment: {
      name: 'THETA for Adjusting Fermentation & First Anoxic DNP (For DN With Available Substrate)',
      si_unit: '--',
      us_unit: '--',
      comments: 'Per WEF MOP No. 8',
    },
    second_anoxic_dnp_tem_adjustment: {
      name: 'THETA for Adjusting Second Anoxic Anoxic DNP (For DN Without Available Substrate)',
      si_unit: '--',
      us_unit: '--',
      comments: 'Per WEF MOP No. 8',
    },
    bht_tem_adjustment: {
      name: 'THETA for Adjusting bhT for Temperature (Heterotrophs Under COD Based Models)',
      si_unit: '--',
      us_unit: '--',
      comments: 'Per Ekama & Marais',
    },
  },
};
