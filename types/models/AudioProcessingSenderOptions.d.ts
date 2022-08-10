/**
 * The AudioProcessingSenderOptions model allows enabling and disabling audio processing for the local participant who transmits an audio stream.
 *
 *By default, the Dolby Voice audio processing algorithm is enabled for Dolby Voice conferences. Dolby Voice is optimized for voice communication and may have degraded behavior with non-voice audio, such as music. SDK 3.0 provides a Web API to disable audio processing in the event that you have background audio or music that needs to be passed through to the conference.
 */
/**
 * Possible values for 'echo cancellation' option.
 */
export declare enum AudioEchoCancellation {
    Default = "default",
    On = "on",
    Off = "off"
}
/**
 * Possible values for 'noise reduction' option.
 */
export declare enum AudioNoiseReduction {
    Default = "default",
    High = "high",
    Medium = "medium",
    Off = "off"
}
/**
 * Available audio modes.
 */
export declare enum AudioMode {
    /**
     * Voice processing is disabled.
     */
    Passthrough = "passthrough",
    /**
     * The mode focuses on best voice quality experience.
     */
    Standard = "standard",
    /**
     * The mode focuses on best music & voice quality experience.
     *
     * Only supported by the NDS platform.
     */
    Studio = "studio"
}
/**
 * Options related to AudioMode.Studio mode only.
 */
export declare class AudioModeStudioOptions {
    /**
     * Configures echo cancellation setting.
     */
    echoCancellation?: AudioEchoCancellation;
    /**
     * Configures noise removal setting.
     */
    noiseReduction?: AudioNoiseReduction;
}
/**
 * REMARK: This class will is not part of music-mode feature.
 *
 * This is only the demonstration of adding new audio mode options class
 * for specific audio mode in the future.
 */
export declare class AudioModeStandardOptions {
}
/**
 * REMARK: This class isn't part of music-mode feature.
 *
 * This is only the demonstration of adding new audio mode options class
 * for specific audio mode in the future.
 */
export declare class AudioModePassthroughOptions {
}
export default class AudioProcessingSenderOptions {
    /**
     * A boolean value that indicates whether the audio processing is enabled or disabled.
     */
    /**
     * UPDATE:
     * The options is deprecated.
     * Use the new option called 'audioMode'. Available replacements:
     *
     *  - set audioMode='passthrough' to disable audio processing.
     *    It corresponds to audioProcessing='false',
     *
     *  - set audioMode='standard' to enable audio processing.
     *    It corresponds to audioProcessing='true'.
     */
    audioProcessing?: boolean;
    /**
     * Configures audio mode setting.
     */
    audioMode?: AudioMode;
    /**
     * Extra options for selected audio mode.
     */
    audioModeOptions?: AudioModeStudioOptions | AudioModeStandardOptions | AudioModePassthroughOptions;
}
