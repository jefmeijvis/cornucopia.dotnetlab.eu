param (
    [string]$PathToScan
)

function Get-RouteStructure {
    param (
        [string]$Path
    )
    $results = @()

    $firstLevelDirs = Get-ChildItem -Path $Path -Directory | Where-Object { $_.Name -match '^\d{2}-' }

    foreach ($dir1 in $firstLevelDirs) {
        $firstPart = if ($dir1.Name -match '^(\d{2})-') { $matches[1] } else { "Unknown" }

        $secondLevelDirs = Get-ChildItem -Path $dir1.FullName -Directory | Where-Object { $_.Name -match '^\d{2}-' }

        foreach ($dir2 in $secondLevelDirs) {
            $secondPart = if ($dir2.Name -match '^(\d{2})-') { $matches[1] } else { "Unknown" }

            $section = "$firstPart.$secondPart"

            $results += @{
                Path = $dir2.FullName
                Section = $section
            }
        }
    }

    return $results
}

$routeStructure = Get-RouteStructure -Path $PathToScan

$json = $routeStructure | ConvertTo-Json -Depth 10

# Adjusted output directory
$outputDir = Join-Path -Path $PWD -ChildPath "..\lib"
$outputPath = Join-Path -Path $outputDir -ChildPath "routes.json"

# Ensure the target directory exists
if (-not (Test-Path -Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$json | Out-File -FilePath $outputPath -Encoding UTF8

Write-Host "Routes structure saved to $outputPath"
