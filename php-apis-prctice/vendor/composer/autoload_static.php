<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1d50d318948f76e56254de2b39ea90de
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1d50d318948f76e56254de2b39ea90de::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1d50d318948f76e56254de2b39ea90de::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1d50d318948f76e56254de2b39ea90de::$classMap;

        }, null, ClassLoader::class);
    }
}
